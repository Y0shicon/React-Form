import { Link } from "react-router-dom";
import navbar from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={navbar.navbar}>
            <Link to="/React-Form">Home</Link>
            <Link to="/React-Form/clubs">All Clubs</Link>
            <Link to="/React-Form/Form">Form Generator</Link>
        </div>
    )
}