import { useState } from "react";
import PLANTS from "./data";
import PlantsList from "./plants/plantslist";
import Cart from "./cart/cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    const foundItemId = cart.findIndex((item) => item.id === newItem.id);

    if (foundItemId < 0) {
      const addedItem = { ...newItem, qnty: 1 };
      setCart([...cart, addedItem]);
    } else {
      const cartCopy = cart.map((plant) =>
        plant.id === newItem.id ? { ...plant, qnty: plant.qnty + 1 } : plant,
      );
      setCart(cartCopy);
    }
  };

  const removeCart = (plantToRemove) => {
    if (plantToRemove.qnty === 1) {
      const cartCopy = cart.filter((plant) => plant.id !== plantToRemove.id);
      setCart(cartCopy);
    } else {
      const cartCopy = cart.map((plant) =>
        plant.id === plantToRemove.id
          ? { ...plant, qnty: plant.qnty - 1 }
          : plant,
      );
      setCart(cartCopy);
    }
  };

  return (
    <>
      <div className="container">
        <PlantsList plants={PLANTS} addToCart={addToCart} />
        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeCart} />
      </div>
    </>
  );
}
