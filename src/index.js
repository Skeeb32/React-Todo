import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"

const data = [
    {
      name: "Clean Room",
      id: 1,
      completed: false
    },
    {
      name: "Buy Groceries",
      id: 2,
      completed: false
    },
    {
      name: "Wash Car",
      id: 3,
      completed: false
    },
    {
      name: "Go For A Walk",
      id: 4,
      completed: false
    },
    {
      name: "Study",
      id: 5,
      completed: false
    },
    {
      name: "Call Parents",
      id: 6,
      completed: false
    }
  ];
export default data;

 
        
        
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);