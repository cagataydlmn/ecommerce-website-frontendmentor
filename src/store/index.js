import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state));
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) };
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadFromLocalStorage(), 
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().cart);
});

export default store;
