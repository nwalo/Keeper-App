import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
	const [ noteArray, setNoteArray ] = useState([]);
	function onAdd(note) {
		setNoteArray((prev) => {
			return [ ...prev, note ];
		});
	}

	function deleteNote(id) {
		var newNoteArray = noteArray.filter((note, index) => {
			return index !== id;
		});
		setNoteArray(newNoteArray);
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={onAdd} />
			{noteArray.map((note, index) => {
				return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />;
			})}

			<Footer />
		</div>
	);
}

export default App;
