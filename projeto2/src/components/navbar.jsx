import { Link, Outlet } from "react-router-dom";
import ChuckNorris from "./chuckNorris";
import DadJoke from "./dadJoke";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Chuck Norris</Link>
          </li>
          <li>
            <Link to="/dadJoke">Dads Jokes</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;