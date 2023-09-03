const AddTodo = (props) => {
	const { todo, setTodo, handleClickBtn } = props;

	return (
		<>
			<label>Todo's Name:</label>
			<input
				value={todo}
				type='text'
				onChange={(e) => setTodo(e.target.value)} // similar useState
			/>
			<button onClick={() => handleClickBtn()}>Submit</button>
			<br />
			<br />
		</>
	);
};

export default AddTodo;
