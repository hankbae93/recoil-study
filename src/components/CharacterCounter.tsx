import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { textState } from "../atoms/textState";
import CharacterCount from "./CharacterCount";

export default function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input type='text' value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}
