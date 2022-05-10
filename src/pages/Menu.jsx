//NPM Packages
import { useParams } from "react-router-dom";

//Project file
import JSONdish from "data/foodItems.json";
import JSONfood from "data/food.json";
import FoodList from "components/FoodList";

export default function Menu() {
  let { menu } = useParams();

  //Properties
  const foodCategory = JSONfood.filter((item) => item.category === menu);
  const dishList = JSONdish.filter((item) => item.category === menu);
  const foodItem = dishList.map((item) => (
    <FoodList key={item.id} link={menu} item={item} />
  ));

  return (
    <div className="menu">
      <h4 className="menu-text">Category of {foodCategory[0].category}</h4>
      <p className="menu-text">{foodCategory[0].description}</p>
      <p className="menu-text">✦✦✦✦✦✦✦✦✦✦✦✦✦✦</p>
      <div>{foodItem}</div>
    </div>
  );
}
