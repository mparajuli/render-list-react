import "./List.css";
import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  // Sort with Arrays
  //itemList.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
  //itemList.sort((a, b) => b.name.localeCompare(a.name)); // Sort reverse alphabetically
  //itemList.sort((a, b) => a.calories - b.calories); // Sort in ascending order
  //itemList.sort((a, b) => b.calories - a.calories); // Sort in decending order

  //Filter with Arrays
  // const lowCalorieFruits = itemList.filter(
  //   (lowCalorieFruit) => lowCalorieFruit.calories < 100
  // );

  // const highCaloriesFruits = itemList.filter(
  //   (highCalorieFruit) => highCalorieFruit.calories >= 100
  // );

  const listItems = itemList.map((item) => {
    return (
      <li key={item.id}>
        {item.name}: <b>{item.calories}</b>
      </li>
    );
  });

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

List.defaultProps = {
  items: [],
  category: "Category",
};

export default List;
