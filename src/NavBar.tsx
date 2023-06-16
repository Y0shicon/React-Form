import { Link } from "react-router-dom";
import navbar from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={navbar.navbar}>
            <Link to="/">Home</Link>
            <Link to="/clubs">All Clubs</Link>
            <Link to="/Form">Form Generator</Link>
        </div>
    )
}