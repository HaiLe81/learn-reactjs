import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
        {/* <TodoItem/> */}
        <Nav/>
        <Login/>
    </div>
  );
}

export default App;
