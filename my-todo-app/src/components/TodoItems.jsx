import React, { useState } from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import PropTypes from "prop-types";

const TodoItems = ({ todos, handleDelete, handleToggle }) => {
	return (
		<React.Fragment>
			{todos.map((item, index) => (
				<div
					onClick={() => handleToggle(item.id)}
					className="flex items-center my-3 gap-2"
					key={index}
				>
					<div
						className={`flex flex-1 items-center cursor-pointer ${
							item.isChecked ? "text-decoration: line-through" : ""
						}`}
					>
						<img
							src={item.isChecked ? not_tick : tick}
							alt=""
							className="w-7"
						/>
						<div className="text-slate-700 ml-4 text-[17px]">{item.text}</div>
					</div>
					<img
						onClick={() => handleDelete(item.id)}
						className="w-3.5 cursor-pointer"
						src={delete_icon}
						alt=""
					/>
				</div>
			))}
		</React.Fragment>
	);
};

TodoItems.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};

export default TodoItems;
