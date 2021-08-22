import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const App = () =>{
  return (
    <React.Fragment>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
    </React.Fragment>
  );
};

ReactDOM.render(
    <App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
