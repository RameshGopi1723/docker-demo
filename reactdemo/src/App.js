import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(response=> response.json()).then(data=>{
      setData(data)
      console.log(data)
  })
},[])

  return (
    <div>
        <h1>{data.message}</h1>
        <h2>{data.greeting}</h2>
    </div>
  );
}

export default App;
