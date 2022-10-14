import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div class="links">
      <Link to="/">
        <button class="btn-hover color-8">Back to Home</button>
      </Link>
      <Link to="/projects">
        <button class="btn-hover color-8">Our Projects</button>
      </Link>
      <Link to="/services">
        <button class="btn-hover color-8">Our Services</button>
      </Link>
      <Link to="/contact">
        <button class="btn-hover color-8">Contact</button>
      </Link>
    </div>
  );
};

export default Links;
