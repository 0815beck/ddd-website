import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/aktuell">Aktuell</NavLink></li>
                <li><NavLink to="/ueberUns">Über Uns</NavLink></li>
                <li><NavLink to="/mitmachen">Mitmachen</NavLink></li>
                <li><NavLink to="/gewerke">Gewerke</NavLink></li>
                <li><NavLink to="/inszenierungen">Inszenierungen</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar