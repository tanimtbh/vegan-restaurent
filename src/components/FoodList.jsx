//NPM Packages
import { Link } from "react-router-dom";

export default function FoodList({ item, link }) {
  //Properties
  const image = require(`assets/images/${item.photo}`);

  return (
    <div className="food-list">
      <div>
        <img className="card-img" src={image} alt="main dishes" />
      </div>

      <div className="card-details">
        <h4>{item.title}</h4>
        <p className="card-description">{item.description}</p>
        <Link className="Link-button" to={"/" + link + "/" + item.id}>
          View Details
        </Link>
      </div>
    </div>
  );
}
