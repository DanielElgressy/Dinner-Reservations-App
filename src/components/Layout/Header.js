import React, { useState, useEffect } from 'react'
import { useLocation, NavLink } from "react-router-dom";
import mealsImage from '../../assets/meal.jpg'
import classes from './Header.module.css'
import Mode from './Mode'
import NavList from './NavList'
import { removeBackSlash } from '../../utils/calcHelper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        {!isHomePage &&
                            <NavLink
                                activeClassName={classes.active}
                                className={classes.returnBtn}
                                to="/home">
                                <ArrowBackIosNewIcon />Back
                            </NavLink>
                        }
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      UpstreamMeals

                        </Typography>
                        <NavList />
                        <Mode {...props} />
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Food Table" />
            </div>
        </>
        // <>
        //     <header className={classes.header}>
        //         <section className={classes.subContainer}>
        //             {!isHomePage &&
        //                 <NavLink
        //                     activeClassName={classes.active}
        //                     className={classes.returnBtn}
        //                     to="/home">
        //                     <ArrowBackIosNewIcon />Back
        //                 </NavLink>
        //             }
        //             <h1>UpstreamMeals</h1>
        //         </section>
        //         <section className={classes.subContainer}>
        //             <NavList />
        //             <Mode {...props} />
        //         </section>

        //     </header>
        // </>
    )
}

export default Header