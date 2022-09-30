import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Orders from './Orders';


function App() {
  const [orders,setOrders]=useState([]);
  console.log(orders)
  // useEffect(()=>{
  //   seorders("something else")
  //   console.log(orders);
  // });
  const handleClick=()=>{
    console.log("Click....")
  }
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then(res => res.json())
      .then(
        (result) => {
          setOrders(result)
        },
        (error) => {
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Package Tracking Project</h1>
          <Orders orders={orders}/>
      </header>
    </div>
  );
}

export default App;
