import React, { useState } from "react";
import "./App.css";



function Form() {

let [name, setName] = useState('');
let [number,setNumber] = useState(0);
let [des, setDes] = useState('');
let [display,setDisplay] = useState(false);
  return (
    <div>
    
    <div id="form">
     <form action="">
         <div><input onChange={(e) => {setName(e.target.value);}}type="text" placeholder="Write your Project name" /></div>
         <div><input onChange={(e) => {setNumber(e.target.value);}} type="number" placeholder="Write project number" /></div>
         <div><input onChange={(e) => {setDes(e.target.value);}} type="text" placeholder="Description" /></div>
         
      </form>    
        <button onClick={()=>{setDisplay(!display)}}>Submit</button>
     
    </div>    
    
    <div id="form">
    
      {display ? <ul>
      <li>{name}</li>
      <li>{number}</li>
      <li>{des}</li>
      </ul> : null}

    </div>   
    </div>


  );
}

export default Form;
