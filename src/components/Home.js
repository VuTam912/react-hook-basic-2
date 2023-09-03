import { Component } from 'react';
import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';
// fucntion
const Home = () => {
	const [todo, setTodo] = useState('');

	const [listTodo, setListTodo] = useState([
		{ id: 'todo1', name: 'Wathing youtube' },
		{ id: 'todo2', name: 'Using facebook' },
		{ id: 'todo3', name: 'Reading book' },
	]);

	const randomIntFromInterval = (min, max) => {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	console.log('>>', listTodo);

	// add new todo
	const handleClickBtn = () => {
		if (!todo) {
			alert("Todo's name is not empty");
			return;
		}
		// number from 4 to 100
		let todoId = randomIntFromInterval(4, 100);
		let todoItem = {
			id: `todo${todoId}`,
			name: todo,
		};

		//option 1
		// Library lodash to clone array
		let currentTodoList = _.clone(listTodo);
		currentTodoList.push(todoItem);
		setListTodo(currentTodoList);
		setTodo('');
		//Note: should be add []
		// setListTodo([...listTodo, todoItem]); // clone and add tode
	};

	// Delete a todo
	const handleDeleteTodo = (id) => {
		let currentTodoList = _.clone(listTodo);
		currentTodoList = currentTodoList.filter((item) => item.id !== id); // should use it
		// currentTodoList = currentTodoList.filter((item) => {
		// 	if (item.id !== id) return item;
		// });
		setListTodo(currentTodoList);
	};

	return (
		<div>
			<AddTodo todo={todo} setTodo={setTodo} handleClickBtn={handleClickBtn} />

			<DisplayTodo childData={listTodo} deleteTodoInParent={handleDeleteTodo} />
		</div>
	);
};

// class
// class TodoList extends Component {
// 	state = {
// 		name: 'RYO',
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<label>Name</label>
// 				<input
// 					type='text'
// 					onChange={(e) => this.setState({ name: e.target.value })} // similar useState
// 				/>
// 				<br />
// 				<br />
// 				Hello Todo list with name = {this.state.name}
// 			</div>
// 		);
// 	}
// }

export default Home;
