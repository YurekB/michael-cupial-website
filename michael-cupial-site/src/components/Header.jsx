import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Michael Cupial Architect</h1>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </header>
  );
};

export default Header;
