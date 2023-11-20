import {useState,useEffect} from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [text,setText] = useState("");

  const excuse = (value)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${value}/`).then((res)=>{
      setText(res.data[0].excuse);
    })
  }
  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={()=>excuse('party')}>Party</button>
      <button onClick={()=>excuse('family')}>Family</button>
      <button onClick={()=>excuse('office')}>Office</button>

      <h3>
        {text}
      </h3>
    </div>
  );
}

export default App;
