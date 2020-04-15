import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
// import Nav from './components/Nav/Nav';
// import Login from './components/Login/Login';

function App() {

  let todoItem = [
    { title: 'Hai dep Try', isComplete: false },
    { title: "Hai Hoc Gioi", isComplete: true },
    { title: 'Hai moi mua xe moi', isComplete: false }
  ]

  return (
    <div className="App">
      { todoItem.length > 0 && todoItem.map((item, index) => <TodoItem key={index} item={item} />) }
      { todoItem.length === 0 && 'Nothing Here' }
        {/* <TodoItem/> */}
        {/* <Nav/> */}
        {/* <Login/> */}
    </div>
  );
}

export default App;
