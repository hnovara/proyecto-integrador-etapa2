import { Link } from "react-router-dom"
import Cart from "../components/Cart"

function NavBar() {
    return (
        <header className="navbar__container">
            <div className="navbar__wrapper">
                <nav>
                    <Link to="/">Juguetería Cósmica</Link>
                    <Link to="/Alta">Alta</Link>
                    <Link to="/Contacto">Contacto</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                </nav>
                <div>
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default NavBar