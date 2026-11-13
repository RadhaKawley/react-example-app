import { NavLink , Link} from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {

  return (

    <nav style={{ display: "flex", gap: "1rem" }}>

      <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>

        Home

      </NavLink>

      <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>

        About

      </NavLink>
        <Link to ="/profile" state={{username:"Radha"}}>
        Profile
        </Link>
    </nav>

  );

}