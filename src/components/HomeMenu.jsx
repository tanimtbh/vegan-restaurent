//NPM Packages
import { Link } from "react-router-dom";

export default function HomeMenu({ foodInfo }) {
  //Properties
  const image = require(`assets/images/${foodInfo.photo}`);

  return (
    <div className="home-menu">
      <img className="card-img" src={image} alt="main dishes" />

      <div className="card-details">
        <h4>{foodInfo.title}</h4>
        <p className="card-description">{foodInfo.description}</p>
        <Link className="Link-button" to={foodInfo.link}>
          View Menu
        </Link>
      </div>
    </div>
  );
}
