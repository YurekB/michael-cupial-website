import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <b>Michael Cupial</b> Architect
      </h1>
      <div class="headerLinks">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Header;
