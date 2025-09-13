import React from "react";
import SimpleCounter from "./SimpleCounter"; 

function Home({ counter }) {
  return (
    <div>
      <SimpleCounter counter={counter} />
    </div>
  );
}

export default Home;

