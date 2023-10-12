import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

function Navigation (props) {
    return (
        <ul className="nav">
            <li className="icon"></li>
            {props.categories.map(category => {
                return <li key={category} className="nav-item"><NavLink activeClassName="active" to={`${category.toLowerCase()}`}>{category}</NavLink></li>
            })}
        </ul>
    )
}   

export default Navigation;
