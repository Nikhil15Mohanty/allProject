import './App.css';
import {useToggle} from './useToggle'
function App() {
    const [isVisible,toggle] = useToggle();
    const [isVisible2,toggle2] = useToggle();
    const [isVisible3,toggle3] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}> 
        {isVisible ? "Hide":"Show"}
      </button>    
      {isVisible && <h1>Hidden text</h1>}
      <div>
        <button onClick={toggle2}> 
        {isVisible2 ? "Hide":"Show"}
        </button>    
        {isVisible2 && <h1>Hidden text</h1>}
      </div>
      <div>
        <button onClick={toggle3}> 
         {isVisible3 ? "Hide":"Show"}
        </button>    
        {isVisible3 && <h1>Hidden text</h1>}
      </div>
    </div>
  );
}

export default App;
