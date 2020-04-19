import React, { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
// import Nav from './components/Nav/Nav';
// import Login from './components/Login/Login';
import tick from './images/down-arrow.svg';

function App() {
  let todoItem = [
    { title: 'Hai dep Try', isComplete: true },
    { title: "Hai Hoc Gioi", isComplete: false },
    { title: 'Hai moi mua xe moi', isComplete: false }
  ]
  let [state, setState] = useState({ todoItem });
  let [newItem, setNewItem] = useState({ newItem: '' });
  function onChangeStatusItem(index) {
    const todoItems = [...state.todoItem] 
    // const isComplete = item.isComplete
    todoItems[index].isComplete = !todoItems[index].isComplete
    setState({
      todoItem: todoItems
    })
    console.log('clicked1', state.todoItem)
  }

  function onKeyUp(e) {
    let text = e.target.value;
    if (e.keyCode === 13) { // Enter key
      if (!text) {
        return;
      }
      text = text.trim()
      if (!text) { return; }


      setState({
        todoItem: [
          {
            title: text, isComplete: false
          },
          ...state.todoItem
        ]
      })
      setNewItem({
        newItem: ''
      })
    }
  }

  function onChange(e) {
    setNewItem({
      newItem: e.target.value
    })
  }

  function mapList(todoList, bool) {
    todoList.map(list => {
      list.isComplete = bool
    })
  }

  function onChangeStatusAll() {
    // use immutability
    let todoList = [...state.todoItem] 
    let result = todoList.filter(x => x.isComplete === true)
    console.log(result.length)
    if (result.length === todoList.length) {
      // todoList.map(list => {
      //   list.isComplete = false
      // })
      mapList(todoList, false)
    } else if (result.length < todoList.length){
      // todoList.map(list => {
      //   list.isComplete = true
      // })
      mapList(todoList, true)
    }

    setState({
      todoItem: todoList
    })
  }

  function filterList(todoList, bool) {
    let a = todoList.filter(item => item.isComplete===bool)
    return a;
  }

  function handlerFilterItemActive() {
    // use immutability
    let todoList = [...state.todoItem] 

    // filter item have isComplete = true
    // let newArr = todoList.filter(x => x.isComplete===true)
    
    let newArr = filterList(todoList, true)
    setState({
      todoItem: newArr
    })
  }

  function handlerFilterItemCompleted() {
    // use immutability
    let todoList = [...state.todoItem]
    
    // filter item have isComplete = false (completed)
    
    let newArr = filterList(todoList, false)
    setState({
      todoItem: newArr
    })
    console.log('completed', state.todoItem)
  }

  function handlerFilterAll() {
    // use immutability
    // let todoList = [...state.todoItem]
    console.log('arr', todoItem)
    setState({
      todoItem: todoItem
    })
  }

  return (
    <div className="App">
      <div className="Header">
        <img onClick={() => onChangeStatusAll()} src={tick} width={32} height={32} alt="not found" />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newItem.newItem}
          onChange={onChange}
          onKeyUp={onKeyUp} />
      </div>
      {state.todoItem.length > 0 && state.todoItem.map((item, index) =>
        <TodoItem key={index} item={item} onClick={() => onChangeStatusItem(index)} />)}
      {state.todoItem.length === 0 && 'Nothing Here'}
      <div className="Footer">
        <p className="item">count selected</p>
        <button onClick={() => handlerFilterAll()} className="item">All</button>
        <button onClick={() => handlerFilterItemActive()}className="item">Active</button>
        <button onClick={() => handlerFilterItemCompleted()} className="item">Completed</button>
        <div className="item" />
      </div>
      {/* <Nav/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
