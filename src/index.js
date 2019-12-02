import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Store
//let store = createStore()
/*const getData = () => {
    fetch('http://kiekerweb.co.za/vehicles.json')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    return jsonData
  })
  .catch((error) => {
    // handle your errors here
    return error
  })
  }*/

//Action
// const saveData = (state = [], action) => {
//     return {
//         type:"SaveData":
//         state = getData()
        
//     }
// }
// const fetchData = (state = null, action) => {
  
//     return state
// }
// //Reducer
// const theData = (state = null, action) => {
  
//     switch(action.type){
//         case "SaveData":
            
//         default: 
//             return state
//     }
// }
// //Dispatch

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
