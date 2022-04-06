import React, { useContext, useState,useEffect } from 'react'
import classes from './Guests.module.css'
import ReservationContext from '../../store/reservation-context';
import Card from '@mui/material/Card';
import GuestItem from './GuestItem/GuestItem';

const Guests = () => {
    const reservationCtx = useContext(ReservationContext)
    const numberOfGuests = reservationCtx.guests.length

    const DUMMY_MEALS = [
        { id: "m1", name: "First", options: ["Salad", "Soup"] },
        { id: "m2", name: "Main", options: ["Fish", "Chicken", "Steak"] },
        { id: "m3", name: "Dessert", options: ["Malaby", "Ice Cream", "Apples"] }
    ]

    const DUMMY_GUESTS = [
        {
            id: "g1",
            name: "guest1",
            meals: [
                { id: "m1", course: "First", option: "Salad" },
                { id: "m2", course: "Main", option: "Fish" },
                { id: "m3", course: "Dessert", option: "Malaby" }
            ]
        },
        {
            id: "g2",
            name: "guest2",
            meals: [
                { id: "m1", course: "First", option: "Salad" },
                { id: "m2", course: "Main", option: "Fish" },
                { id: "m3", course: "Dessert", option: "Malaby" }
            ]
        },
        {
            id: "g3",
            name: "guest3",
            meals: [
                { id: "m1", course: "First", option: "Salad" },
                { id: "m2", course: "Main", option: "Fish" },
                { id: "m3", course: "Dessert", option: "Malaby" }
            ]
        },
        ,
        {
            id: "g3",
            name: "guest4",
            meals: [
                { id: "m1", course: "First", option: "Salad" },
                { id: "m2", course: "Main", option: "Fish" },
                { id: "m3", course: "Dessert", option: "Malaby" }
            ]
        }


    ]

    const addNewGuest = () => {
        let idNum
        if (numberOfGuests > 0) {
            //adding another guest after the last guest on line.
            const lastGuest = reservationCtx.guests[numberOfGuests - 1]
            const guestIdNumber = lastGuest.id?.substring(1) || 0;
            const toNumber = +guestIdNumber
            idNum = toNumber
        } else {
            idNum = 0
        }

        reservationCtx.addNewGuest({
            id: `g${idNum + 1}`,
            name: `guest${idNum + 1}`,
            meals: []
        })
    }

    const removeGuest = (id) => {
        reservationCtx.removeGuest(id)
    }

    const updateGuest = (guest) => {
        reservationCtx.updateGuest(guest)
    }

    const guestList = (
        reservationCtx.guests.map((guest, key) => (
            <GuestItem
                key={key}
                guest={guest}
                mealOptions={DUMMY_MEALS}
                onAddNewGuest={addNewGuest.bind(null, guest)}
                onRemoveGuest={removeGuest.bind(null, guest.id)}
                onUpdateGuest={updateGuest}
            />
        ))
    )
    return (
        <Card className={classes.guestsCard} sx={{background:"transparent", boxShadow: 'none'}}>
            {guestList}
            {reservationCtx.guests.length === 0 && <button onClick={addNewGuest.bind(null, {})}>Add user</button>}
        </Card>
    )
}

export default Guests