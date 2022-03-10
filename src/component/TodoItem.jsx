import react from 'react';

function TodoItem(props) {
	
	return <li onClick={props.delete}>{props.text}</li>;
}
export default TodoItem;
