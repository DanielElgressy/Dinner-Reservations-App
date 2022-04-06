import React, { useState, useContext, useEffect } from 'react'
import { CardActions, CardContent, Typography, Button, Box } from '@mui/material'
import classes from './GuestItem.module.css'
import SelectField from '../../UI/SelectField'
import ReservationContext from '../../../store/reservation-context'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const GuestItem = (props) => {
    const guestsCtx = useContext(ReservationContext)
    const [firstCourse, setFirstCourse] = useState('')
    const [mainCourse, setMainCourse] = useState('')
    const [dessertCourse, setDessertCourse] = useState('')
    const [isGuestDone, setIsGuestDone] = useState(false)

    const { guest, mealOptions } = props

    const allMealsAreComplete = (firstCourse && mainCourse && dessertCourse) ? true : false
    useEffect(() => {
        if (checkIfGuestIslast() && allMealsAreComplete) {
            setIsGuestDone(true)
        } else {
            setIsGuestDone(false)
        }
    }, [guestsCtx.guests.length])

    const checkIfGuestIslast = () => {
        const guestsArray = guestsCtx.guests
        const guestIndex = guestsArray.findIndex(guestItem => guestItem.id === guest.id)
        let numberOfGuests = guestsArray.length

        if (guestIndex + 1 === numberOfGuests) {
            return true
        }
        else { return false }
    }


    useEffect(() => {
        if (allMealsAreComplete) {
            if (checkIfGuestIslast() && allMealsAreComplete) {
                setIsGuestDone(true)
            } else {
                setIsGuestDone(false)
            }
            // if (checkIfGuestIslast() && allMealsAreComplete) {
            //     setIsGuestDone(true)
            // } else {
            //     setIsGuestDone(false)
            // }

            let updatedGuestInfo = {
                id: guest.id,
                name: guest.name,
                meals: [
                    { id: "m1", course: "First", option: firstCourse },
                    { id: "m2", course: "Main", option: mainCourse },
                    { id: "m3", course: "Dessert", option: dessertCourse }
                ]
            }
            props.onUpdateGuest(updatedGuestInfo)

        } else {
            setIsGuestDone(false)
        }

    }, [dessertCourse])


    const selectChangeHandler = ({ value, name }) => {
        switch (name) {
            case 'First':
                setFirstCourse(value)
                setMainCourse('')
                setDessertCourse('')
                break;
            case 'Main':
                setMainCourse(value)
                setDessertCourse('')
                break;
            case 'Dessert':
                setDessertCourse(value)
                break;

            default:
                console.error("An unknown select input name was changed")
                break;
        }
    }

    const updateGuestHandler = () => {
        let DUMMY_GUEST = {
            id: guest.id,
            name: guest.name,
            meals: [
                { id: "m1", course: "First", option: firstCourse },
                { id: "m2", course: "Main", option: mainCourse },
                { id: "m3", course: "Dessert", option: dessertCourse }
            ]
        }
        props.onUpdateGuest(DUMMY_GUEST)
    }

    const selectFields = (
        mealOptions.map((meal, key) => (
            <SelectField
                id={meal.id}
                key={key}
                label={meal.name}
                value={
                    meal.name === 'First' ? firstCourse :
                        meal.name === 'Main' ? mainCourse :
                            meal.name === 'Dessert' ? dessertCourse : ''
                }
                options={meal.options}
                name={meal.name}
                onChangeHandler={selectChangeHandler}
            />
        ))
    )
    const onAddGuest = () => {
        setIsGuestDone(false)
        props.onAddNewGuest()
    }

    return (

        <Box className={classes.guestBox} sx={{
            backgroundColor: 'primary.dark',
            borderRadius: "15px",
        }} >
            <CardContent className={classes.guestName}>
                <Typography variant="h5" >
                    {guest.name}
                </Typography>
                <Typography className={classes.removeGuestIcon} onClick={props.onRemoveGuest} >
                    <DeleteOutlineIcon />
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", flexWrap: "wrap" }}>
                {selectFields}
            </CardActions>
            {isGuestDone && <Button variant="contained" sx={{height: "40px"}} onClick={onAddGuest}>Add Guest</Button>}


        </Box>
    )
}

export default GuestItem