import Plant from "./plants";

export default function PlantsList({ plants, addToCart }) {
  return (
    <>
      <h2>Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <Plant plant={plant} addToCart={addToCart} />
        </div>
      ))}
    </>
  );
}
