import "./Footer_icons.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer_icons = () => {
  const profile_linkedin =
    "https://www.linkedin.com/in/fabrizio-alexander-rojas-4a8051381/s";
  return (
    <div className=" footer-bottom flex text-center p-5 d-flex justify-center">
      <ul>
        <li>
          <a href="#" className="icono">
            <i className="fab fa-facebook-f icon"></i>
          </a>
        </li>
        <li>
          <a href="#" className="icono">
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <Link to={profile_linkedin} className="icono" target="blank">
            <i className="fab fa-linkedin-in icon"></i>
          </Link>
        </li>
        <li>
          <a href="#" className="icono">
            <FontAwesomeIcon icon={["fab", "fa-google-plus-g icon"]} />
          </a>
        </li>
      </ul>
    </div>
  );
};
