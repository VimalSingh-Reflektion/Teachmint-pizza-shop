let orderIdCount = 0;

export const placeOrder = (order) => {
  const orderId = `00${++orderIdCount}`;
  return {
    type: "PLACE_ORDER",
    payload: { ...order, orderId, stage: "Order Placed", time: 0, prevTime: 0 },
  };
};

export const updateOrderStatus = (orderId, stage) => ({
  type: "UPDATE_ORDER_STAGE",
  payload: { orderId, stage },
});

export const cancelOrder = (orderId) => ({
  type: "CANCEL_ORDER",
  payload: orderId,
});

export const updateOrderTime = (orderId, time) => ({
  type: "UPDATE_ORDER_TIME",
  payload: { orderId, time },
});
