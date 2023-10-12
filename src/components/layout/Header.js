import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header(props) {
    return(
        <header className="header">
            <Link to="/"><img alt="icon book" src="icon-book.png"/></Link>
            <Navigation categories={props.categories}/>
        </header>
    )
}   

export default Header;