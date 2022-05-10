//Project files
import facebook from "assets/images/facebok.png";
import github from "assets/images/github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        <a
          className="footer-link"
          href="https://github.com/"
        >
          <img src={github} alt="github logo" />
        </a>
        <a className="footer-link" href="https://www.facebook.com">
          <img src={facebook} alt="Facebook logo" />
        </a>
      </span>
      <p>2022. vegan restaurent, Norrköping</p>
    </footer>
  );
}
