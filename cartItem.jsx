export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <div>
      <div>{item.image}</div>
      <p>{item.name}</p>
      <p>quantity: {item.qnty}</p>
      <button onClick={() => addToCart(item)}>+</button>
      <button onClick={() => removeFromCart(item)}>-</button>
    </div>
  );
}
