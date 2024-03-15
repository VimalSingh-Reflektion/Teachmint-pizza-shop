const initialState = {
  orders: [],
  orderIdCounter: 0,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        orderIdCounter: state.orderIdCounter + 1,
      };
    case "UPDATE_ORDER_STAGE":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload.orderId
            ? { ...order, stage: action.payload.stage, prevTime: order.time }
            : order
        ),
      };
    case "CANCEL_ORDER":
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId !== action.payload
        ),
      };
    case "UPDATE_ORDER_TIME":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload.orderId
            ? { ...order, time: action.payload.time }
            : order
        ),
      };
    default:
      return state;
  }
};

export default pizzaReducer;
