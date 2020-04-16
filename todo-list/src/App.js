import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
// import Nav from './components/Nav/Nav';
// import Login from './components/Login/Login';

function App() {
  let todoItem = [
    { title: 'Hai dep Try', isComplete: true },
    { title: "Hai Hoc Gioi", isComplete: true },
    { title: 'Hai moi mua xe moi', isComplete: true }
  ]
  let [state, setState] = useState({ todoItem });
  
  function onChangeStatusItem(item, index) {
    const todoItems = state.todoItem
    const isComplete = item.isComplete
    setState({
      todoItem: [
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index+1)
      ]
    })
    console.log('item after', state)
  }


  return (
    <div className="App">
      {state.todoItem.length > 0 && state.todoItem.map((item, index) =>
        <TodoItem key={index} item={item} onClick={() => onChangeStatusItem(item, index)} />)}
      {state.todoItem.length === 0 && 'Nothing Here'}
      {/* <TodoItem/> */}
      {/* <Nav/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
