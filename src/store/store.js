import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../reducers/index';


const store = configureStore({
    reducer: pizzaReducer,
});

export default store;