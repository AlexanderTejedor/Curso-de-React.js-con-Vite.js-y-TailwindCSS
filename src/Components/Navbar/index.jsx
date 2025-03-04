import { NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Shopy</NavLink></li>
                <li><NavLink to='/'>All</NavLink></li>
                <li><NavLink to='/clothes'>Clothes</NavLink></li>
                <li><NavLink to='/electronics'>Electronics</NavLink></li>
                <li><NavLink to='/fornitures'>Fornitures</NavLink></li>
                <li><NavLink to='/toys'>Toys</NavLink></li>
                <li><NavLink to='/others'>Others</NavLink></li>
            </ul>
            <ul>
                <li>atromero.98@gmail.com</li>
                <li><NavLink to='/my-orders'>My Orders</NavLink></li>
                <li><NavLink to='/my-account'>My Acount</NavLink></li>
                <li><NavLink to='/sign-in'>Sign In</NavLink></li>
                <li>🛒 0</li>
            </ul>
        </nav>
    )
}
export { Navbar };