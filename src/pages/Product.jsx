//NPM Packages
import { useLocation, useParams, Link } from "react-router-dom";

//Project files
import detailsFoodData from "data/foodItems.json";

export default function Product() {
  let { id } = useParams();
  const { pathname } = useLocation();

  //Properties
  const foodList = detailsFoodData.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const nutritionDetails = foodList.nutrition.map((item) => (
    <tr key={item.id} item={item}>
      <td>{item.name}</td>
      <td>{item.amount}</td>
    </tr>
  ));

  const foodIngradients = foodList.ingredients.map(
    (ingredient) => ingredient + ", "
  );
  const image = require(`assets/images/${foodList.photo}`);

  return (
    <div className="product">
      <img className="detail-img" src={image} alt="item" />
      <h2>{foodList.title}</h2>
      <h3>{foodList.description}</h3>
      <p>
        <b>Ingradients</b>: {foodIngradients}
      </p>
      <h4>Nutrition</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
        {nutritionDetails}
      </table>
      <Link className="Link-button" to={"/" + pathname.split("/")[1]}>
        Go Back
      </Link>
    </div>
  );
}
