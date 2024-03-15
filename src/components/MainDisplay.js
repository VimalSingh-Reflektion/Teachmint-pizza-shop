import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelOrder } from '../actions/index';
import '../css/MainDisplay.css';

const MainDisplay = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const pizzasDeliveredCount = orders.filter((order) => order.stage === 'Order Picked').length;

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="order-summary">
      <h3>Main Section</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>Order Id: {order.orderId}</td>
              <td>{order.stage}</td>
              <td>{Math.floor(order.time / 60)} min {Math.floor(order.time % 60)} sec</td>
              <td>
                {order.stage !== 'Order Picked' && (
                  <button onClick={() => handleCancelOrder(order.orderId)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
          <tr className="pizza-total">
            <td colSpan="1">Total order delivered</td>
            <td colSpan="3">00{pizzasDeliveredCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainDisplay;
