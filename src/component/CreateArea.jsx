import React from 'react';
import { useState } from 'react';

function CreateArea(props) {
	const [ note, setNote ] = useState({ title: '', content: '' });

	function handleChange(event) {
		const { name, value } = event.target;
		// console.log(value);
		setNote((prev) => {
			return {
				...prev,
				[name]: value
			};
			// if (name === 'title') {
			// 	return { title: value, content: prev.content };
			// } else {
			// 	return { title: prev.title, content: value };
			// }
		});
	}

	function handleSubmit(event) {
		event.preventDefault();

		props.onAdd(note);
		setNote({ title: '', content: '' });
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
				<textarea
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
