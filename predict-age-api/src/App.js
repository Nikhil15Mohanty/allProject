import './App.css';
import { useState,useEffect } from 'react';
import Axios from 'axios'
function App() {
    const [name,setName]=useState("");
    const [age,setAge] = useState({});
    const textCollect=(event)=>{
      setName(event.target.value);
    }

    const predictAge = ()=>{
      Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
          setAge(res.data);
      })
    }
    useEffect(()=>{
      predictAge();
    },[])
  
  return (
    <div className="App">
      <input type = "text" onChange={textCollect}/>
      <button onClick={predictAge}>Predict age</button>
      <h1>Name: {age.name}</h1>
      <h1>Age: {age.age}</h1>
    </div>
  );
}

export default App;
