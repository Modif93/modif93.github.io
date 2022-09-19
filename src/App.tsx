import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Menu from './components/BurgerMenu/Menu/Menu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello react
        </p>
        <a>
        <Counter name = "ppap"/>
        <Button name = "clicker"/>
        <Menu />

        </a>
      </header>
    </div>
  );
}


export default App;
