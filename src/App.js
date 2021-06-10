import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const [count, setCount] = useState([]);
  const [search, setSearch] = useState("");

  function getTheJokes() {
    return fetch(`https://icanhazdadjoke.com/search?limit=10&term='${search}'`,{headers: {
      'Accept': 'application/json'}})
      .then((response) => response.json())
      .then((data) => setCount(data.results)); 
}
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Our top picks for the day</h1>
          <div className="jokes">display jokes here </div>
          <input type="text" placeholder="What's the magic word?" onChange={event => setSearch(event.target.value)}></input>
          <button className="fetch-button" onClick={getTheJokes}>Fetch it!!!!</button>
          {count.map((joke,index)=> (
            <div className="Jokes" key={index}>
            <p>{joke.joke}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
