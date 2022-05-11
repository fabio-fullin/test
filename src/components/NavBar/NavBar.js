import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <h1>Super Tienda</h1>
            <nav id="mynav" styleName="flex-direction: row;" className="nav">
                <a href="javascript:alert('Home was clicked')">Home</a>
                <a href="javascript:alert('Gallery was clicked')">Gallery</a>
                <a href="javascript:alert('Contact Us was clicked')">Contact Us</a>
                <a href="javascript:alert('About was clicked')">About Us</a>
            </nav>
        </>
    )
}

export default NavBar