import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <h1>Super Tienda</h1>
            <nav id="mynav" style={{flexDirection: 'row'}} className="nav">
                <button>Home</button>
                <button>Gallery</button>
                <button>Contact us</button>
                <button>About as</button>
            </nav>
            <CartWidget numero="4"/>
        </>
    )
}

export default NavBar