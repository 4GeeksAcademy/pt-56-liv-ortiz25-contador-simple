import React from "react";

function SimpleCounter({ counter }) {
  const six = Math.floor(counter / 100000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  return (
    <div className="container">
      <div className="icon"><i className="far fa-clock"></i></div>
      <div className="six">{six}</div>
      <div className="five">{five}</div>
      <div className="four">{four}</div>
      <div className="three">{three}</div>
      <div className="two">{two}</div>
      <div className="one">{one}</div>
    </div>
  );
}

export default SimpleCounter;

