import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../actions/index";
import '../css/PizzaType.css';

const PizzaType = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  const [order, setOrder] = useState({ type: "", size: "", base: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (orders.length < 10) {
        dispatch(placeOrder(order));
    } else {
      alert("Not taking any more orders for now");
    }
  };

  return (
    <div className="form-container">
      <h1>PIZZA SHOP</h1>
      <h3>Place Order</h3>
      <form>
        <label className="label">
          Pizza Type:
          <select
            className="select"
            name="type"
            value={order.type}
            onChange={handleInputChange}
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>

        <label className="label">
          Pizza Size:
          <select
            className="select"
            name="size"
            value={order.size}
            onChange={handleInputChange}
          >
            <option value="Small">Large</option>
            <option value="Medium">Medium</option>
            <option value="Large">Small</option>
          </select>
        </label>

        <label className="label">
          Pizza Base:
          <select
            className="select"
            name="base"
            value={order.base}
            onChange={handleInputChange}
          >
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <button className="button" type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PizzaType;
