import React,{useState} from "react";
import "./App.css";

function App() { 
  const {weight,setWeight}= useState(0);
  const {height,setHeight}= useState(0);
  const {bmi,setBmi}= useState('');
  const {message,setMessage} = useState('');
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
            ></input>
          </div>
          <div>
            <label>Height(lbs)</label>
            <input
              type="text"
              placeholder="Enter height Value"
              value={height}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn btn-outline"
              // onClick={reload}
              // type="submit"
            
            >Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
