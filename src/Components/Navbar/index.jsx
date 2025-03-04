import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Shopy</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar };