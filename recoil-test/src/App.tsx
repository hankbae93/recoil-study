import React from "react";
import { RecoilRoot } from "recoil";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";

function App() {
	return (
		<RecoilRoot>
			<div className='App'>
				{/* <CharacterCounter /> */}
				<TodoList />
			</div>
		</RecoilRoot>
	);
}

export default App;
