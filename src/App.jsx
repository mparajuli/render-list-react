import List from "./List.jsx";

const fruits = [
  { id: 1, name: "apple", calories: 95 },
  { id: 2, name: "mango", calories: 201 },
  { id: 3, name: "orange", calories: 45 },
  { id: 4, name: "banana", calories: 105 },
  { id: 5, name: "pineapple", calories: 452 },
];

const vegetables = [
  { id: 1, name: "brocolli", calories: 50 },
  { id: 2, name: "potato", calories: 110 },
  { id: 3, name: "cabbage", calories: 6 },
  { id: 4, name: "cauli", calories: 146 },
  { id: 5, name: "okra", calories: 33 },
];

function App() {
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category={"Fruits"} />}
      {vegetables.length > 0 && (
        <List items={vegetables} category={"Vegetable"} />
      )}
    </>
  );
}

export default App;
