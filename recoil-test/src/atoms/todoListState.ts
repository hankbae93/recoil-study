import { atom } from "recoil";

export interface TodoTypes {
	id: number;
	text: string;
	isComplete: boolean;
}

export const todoListState = atom<TodoTypes[]>({
	key: "todoListState",
	default: [],
});
