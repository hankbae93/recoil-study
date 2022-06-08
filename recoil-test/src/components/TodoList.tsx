import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms/todoListFilterState";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
	const todoList = useRecoilValue(filteredTodoListState);

	return (
		<>
			<TodoListStats />
			<TodoListFilters />
			<TodoItemCreator />

			{todoList.map((todoItem) => (
				<TodoItem key={todoItem.id} item={todoItem} />
			))}
		</>
	);
};

export default TodoList;
