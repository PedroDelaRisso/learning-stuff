import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";

export const CartContext = createContext();

export function CartContextProvider(props: any) {
  const [items, setItems] = createStore([]);

  return (
    <CartContext.Provider value={{items, setItems}}>
      {props.children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}