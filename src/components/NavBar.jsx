import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/home">
        <button variant="outlined">
          Home
        </button>
      </Link>
      <Link to="/pathfinding">
        <button variant="outlined">
          Pathfinding
        </button>
      </Link>
      <Link to="/sorting">
        <button variant="outlined">
          Sorting
        </button>
      </Link>
    </div>
  );
}

export default Navbar;