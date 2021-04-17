import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Redux/redux-store';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import firebase from 'firebase';
import 'firebase/auth';



firebase.initializeApp(
  {
    apiKey: "AIzaSyBC4twWZrgWt5UwJGBdNaudxv2XgQq_m1M",
    authDomain: "dogsnetwork-react-dc348.firebaseapp.com",
    projectId: "dogsnetwork-react-dc348",
    storageBucket: "dogsnetwork-react-dc348.appspot.com",
    messagingSenderId: "328656292027",
    appId: "1:328656292027:web:d21bb79181d8c71575419e",
    measurementId: "G-ZJS2Z44EF6"
  }
);
const auth = firebase.auth();


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store} >
        <App auth={auth}/>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

