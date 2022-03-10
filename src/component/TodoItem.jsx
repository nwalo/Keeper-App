import react, { useState } from 'react';

function TodoItem(props) {
	// const [ style, setStyle ] = useState(false);

	// function handleClick(e) {
	// 	if (style === false) {
	// 		setStyle(true);
	// 	} else {
	// 		setStyle(false);
	// 	}style={style ? { textDecoration: 'line-through' } : null}
	// }

	return <li onClick={props.delete}>{props.text}</li>;
}
export default TodoItem;
