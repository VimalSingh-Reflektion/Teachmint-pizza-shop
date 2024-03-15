import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderStatus, updateOrderTime } from "../actions/index";
import "../css/OrderStatus.css";

const OrderStatus = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      orders.forEach((order) => {
        dispatch(
          order.stage !== "Order Picked"
            ? updateOrderTime(order.orderId, order.time + 1)
            : updateOrderTime(order.orderId, order.time)
        );
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, orders]);

  const handleNextButtonClick = (orderId, currentStage) => {
    switch (currentStage) {
      case "Order Placed":
        dispatch(updateOrderStatus(orderId, "Order in Making"));
        break;
      case "Order in Making":
        dispatch(updateOrderStatus(orderId, "Order Ready"));
        break;
      case "Order Ready":
        dispatch(updateOrderStatus(orderId, "Order Picked"));
        break;
      default:
        console.log("error", currentStage);
    }
  };

  const cardHighlight = (order) => order.time > 180;

  const stages = [
    "Order Placed",
    "Order in Making",
    "Order Ready",
    "Order Picked",
  ];
  return (
    <div>
      <h3>Pizza stages section</h3>
      <div className="order-container">
        {stages.map((stage) => (
          <div key={stage} className="order-card">
            <h4>{stage}</h4>
            {orders
              .filter((order) => order.stage === stage)
              .sort((a, b) => a.time - b.time)
              .map((order) => (
                <div
                  key={order.orderId}
                  className={`order-detail ${
                    cardHighlight(order) ? "red" : ""
                  } ${order.stage === "Order Picked" ? "order-ready" : ""}`}
                >
                  <p>Order: {order.orderId}</p>
                  {order.stage !== "Order Picked" && (
                    <p> {Math.floor((order.time - (order.prevTime || 0)) / 60)} min {Math.floor((order.time - (order.prevTime || 0)) % 60)} sec</p>
                  )}
                  <div className="action-buttons">
                    {order.stage !== "Order Picked" && (
                      <button
                        onClick={() =>
                          handleNextButtonClick(order.orderId, order.stage)
                        }
                      >
                        Next
                      </button>
                    )}
                    {order.stage === "Order Picked" && <p>Picked</p>}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
