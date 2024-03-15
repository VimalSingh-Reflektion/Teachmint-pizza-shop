import './App.css';
import React from 'react';
import PizzaType from './components/PizzaType';
import OrderStatus from './components/OrderStatus';
import MainDisplay from './components/MainDisplay';


function App() {
  return (
    <div className="App">
      <PizzaType />
      <OrderStatus />
      <MainDisplay />
    </div>
  );
};

export default App;
