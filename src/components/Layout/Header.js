import React, { useState, useEffect } from 'react'
import { useLocation, NavLink } from "react-router-dom";
import mealsImage from '../../assets/meal.jpg'
import classes from './Header.module.css'
import Mode from './Mode'
import NavList from './NavList'
import { removeBackSlash } from '../../utils/calcHelper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = props => {
    const [isHomePage, setIsHomePage] = useState(true)
    const location = useLocation();
    const { pathname } = location

    useEffect(() => {
        if (removeBackSlash(pathname) === "home") {
            setIsHomePage(true)
        }
        else {
            setIsHomePage(false)
        }
    }, [pathname])

    const onReturnHandler = () => {

    }

    return (
        <>
            <header className={classes.header}>
                <section className={classes.subContainer}>
                    {!isHomePage &&
                        <NavLink
                            activeClassName={classes.active}
                            className={classes.returnBtn}
                            to="/home">
                            <ArrowBackIosNewIcon />Back
                        </NavLink>
                    }
                    <h1>UpstreamMeals</h1>
                </section>
                <section className={classes.subContainer}>
                    <NavList />
                    <Mode {...props} />
                </section>

            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Food Table" />
            </div>
        </>
    )
}

export default Header