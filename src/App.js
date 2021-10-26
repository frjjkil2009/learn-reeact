import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "BinhLT";
  const age = 29;
  const isMale = true;
  const developer = {
    name: "Easy Frontend"
  };
  const colorList = ["red", "orange", "blue"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BinhLT
        </p>
        <p>Xin chao {name} - {age} - {isMale ? "Male" : "Female"}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </>
        )}

        <p>{developer.name}</p>

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
