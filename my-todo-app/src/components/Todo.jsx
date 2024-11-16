import React, { useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
	const [inputVal, setInputVal] = useState("");
	const [todos, setTodos] = useState([]);

	/* Add new items to the todos state */
	function handleAddTodos() {
		if (!inputVal) return;

		const newItem = [
			...todos,
			{ id: Date.now(), text: inputVal, isChecked: false },
		];
		setTodos(newItem);

		setInputVal("");
	}

	/* Delete function */
	function handleDelete(id) {
		setTodos((todos) => {
			return todos.filter((todo) => todo.id !== id);
		});
	}

	// Toggle function
	function handleToggle(id) {
		setTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
			)
		);
	}

	return (
		<div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
			{/* -----Title------ */}
			<div className="flex items-center mt-7 gap-2">
				<img className="w-8" src={todo_icon} alt="" />
				<h1 className="text-3xl font-semibold text-purple-500">Todo List</h1>
			</div>

			{/* -----Input box------ */}

			<div className="flex items-center my-7 bg-gray-200 rounded-full">
				<input
					className="bg-transparent border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 outline-none"
					type="text"
					placeholder="Add your task"
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<button
					className="border-none rounded-full bg-green-600 w-32 h-14 text-white text-lg font-medium"
					onClick={() => handleAddTodos()}
				>
					ADD +
				</button>
			</div>

			<div>
				<TodoItems
					todos={todos}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			</div>
		</div>
	);
};

export default Todo;
