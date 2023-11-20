import './App.css';
import { useSelector } from "react-redux"
import {Child1} from './components/Child1';
function App() {
  const data = useSelector((c)=>{         //It takes value from store 
    return c.show.value              //show is coming from store show(key)   
 })
  return (
    <div className="App">
      App- {data}
      <Child1 />
    </div>
  );
}

export default App;


/*
First step : create a store where you wnat to store the data
-> to create a store you need to create a app folder inside src in which you have to add store js file
  and inside it you need to use configureStore to create a store inside it contain a reducer


Second step: After creating to store now go to the index.js file 
->import {store} from './app/store'   //this tell where is the storage is
import {Provider} from 'react-redux'  // this tell who can access store value which need a store value to pass it


Third Step: create a slice, slice contain all the logic of reducer of store 
-> create a feaute folder inside it create a showSlic file 
-> create a slice and it will contain 3 three name,initialValue,reducers and it export 3 thing
    the function which manipulate state value,(aciton) 
    another to export by default is reducer
    REDUCER IS THE ONLY WAY TO UPDATE THE STORE VALUE 
*/