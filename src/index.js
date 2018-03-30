import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import App2 from './App2';
//import Clock from './Clock';
import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App2 />, document.getElementById('root'));
//ReactDOM.render(<Clock message="Hej med dig" intervalTime="2000"/>, document.getElementById('root'));
ReactDOM.render(<Toggle />, document.getElementById('root'));
registerServiceWorker();
