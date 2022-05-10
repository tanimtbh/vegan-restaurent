//Project file
import location from "assets/images/map.png";

export default function Contacts() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="info">
          <section>
            <h3>Our location</h3>
            <p>kungsgatan 3, 583 36 Norrköping</p>
          </section>
          <section>
            <h3>Opening hours</h3>
            <p>Monday to Friday: 11:00 - 22:00</p>
          </section>
          <section>
            <h3>Feel free to ask me if you have any questions</h3>
            <p>Call us:+46727629827 </p>
          </section>
        </div>
        <form className="contact-form">
          <h3>Book a table</h3>
          <p>Your Full Name</p>
          <input type="text" />
          <p>Your Email address</p>
          <input type="email" />
          <p>Choose date</p>
          <input type="date" name="" id="" />
          <p>Choose time</p>
          <input type="time" />
          <div>
            <button className="button-view">Book here</button>
          </div>
        </form>
      </div>
      <div className="contact-map">
        <h3 className="map">Map</h3>
        <img className="contact-image" src={location} alt="locantion" />
      </div>
    </div>
  );
}
