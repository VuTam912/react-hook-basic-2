const DisplayTodo = (props) => {
	const DeleteTodoFromChild = (id) => {
		props.deleteTodoInParent(id);
	};

	const listTodo = props.childData;

	return (
		<>
			{' '}
			<div>----List Todo----</div>
			{listTodo.map((item, index) => {
				return (
					<div
						id={item.id}
						key={index}
						style={{ cursor: 'pointer' }}
						onClick={() => DeleteTodoFromChild(item.id)}
					>
						{item.name}
					</div>
				);
			})}
		</>
	);
};

export default DisplayTodo;
