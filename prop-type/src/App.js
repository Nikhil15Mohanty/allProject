import './App.css';
import {Person} from './Person'
function App() {
  return (
    <div className="App">
      <Person 
      name = "Nikhil Mohanty"
      age = {23}
      email = "nikhil@gamil.com"
      isMarried = {false}
      friends = {['Vicky','Veena','Rahul']}
      />
    </div>
  );
}

export default App;
