export default function Plant({ plant, addToCart }) {
  return (
    <>
      <div>{plant.image}</div>
      <p>{plant.name}</p>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </>
  );
}
