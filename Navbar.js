import {Link} from "react-router-dom"
const Navbar = () => {
    return ( <nav className="navbar">
        <img clasName="logo" src={require("./Blogzzy.png")} />
        <div className="links">
            <Link to="/" className="buttton">Home</Link>
            <Link to="/Create" className="button">Create</Link>
        </div>
    </nav> );
}
 
export default Navbar;