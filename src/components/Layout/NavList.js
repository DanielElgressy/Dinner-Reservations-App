import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './NavList.module.css'

const NavList = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/reservation">Reservation</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavList