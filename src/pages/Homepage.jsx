//Project file
import JSONfood from "data/food.json";
import HomeMenu from "components/HomeMenu";

export default function Homepage() {
  //Properties
  const foodList = JSONfood.map((item) => (
    <HomeMenu key={item.id} foodInfo={item} />
  ));
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1 className="highlight">Vegan Norrköping</h1>
          <span className="highlight" id="slogan">
            Fresh food, fresh ideas.
          </span>
        </div>
      </section>

      <section className="home">{foodList}</section>
    </div>
  );
}
