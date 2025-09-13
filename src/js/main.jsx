import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;

setInterval(() => {
  counter++;
  root.render(
    <React.StrictMode>
      <Home counter={counter} />
    </React.StrictMode>
  );
}, 1000);
