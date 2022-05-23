import React from 'react';
import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
   <div className="App">
     DEMAT BREIZH<br/>
     <Button text="Hello" onButtonClicked={() => {
       console.log();
     }}
       bgColor="DodgerBlue"
       color="AliceBlue"
     />
     <Button text="Ca roule ?" />
     <Button text="Hello" />
   </div>
  );
}

export default App;
