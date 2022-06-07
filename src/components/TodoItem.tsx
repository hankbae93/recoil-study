import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { todoListState, TodoTypes } from "../atoms/todoListState";

export default function TodoItem({ item }: { item: TodoTypes }) {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<div>
			<input type='text' value={item.text} onChange={editItemText} />
			<input
				type='checkbox'
				checked={item.isComplete}
				onChange={toggleItemCompletion}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	);
}

function replaceItemAtIndex(
	arr: TodoTypes[],
	index: number,
	newValue: TodoTypes
) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoTypes[], index: number) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
