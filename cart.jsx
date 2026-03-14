import CartItem from "./cartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </>
  );
}
