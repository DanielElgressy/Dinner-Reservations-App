import React, { useState, useReducer } from 'react'
import ReservationContext from './reservation-context'

const defaultGuestState = {
    guests: [{
        id: "g1",
        name: "guest1",
        meals: [
            { id: "m1", course: "First", option: "Salad" },
            { id: "m2", course: "Main", option: "Fish" },
            { id: "m3", course: "Dessert", option: "Malaby" }
        ]
    }]
}

const guestsReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedGuests = state.guests.concat(action.guest)
        return {
            guests: updatedGuests
        }
    }

    if (action.type === 'REMOVE') {
        
        console.log(action.id)
        const exisitingGuestIndex = state.guests.findIndex((guest => guest.id === action.id))
        const exisitingGuest = state.guests[exisitingGuestIndex]
        let updatedGuests
        if (exisitingGuest) {
            updatedGuests = state.guests.filter(guest => guest.id !== action.id)
            console.log(updatedGuests)
        } else {
            updatedGuests = [...state.guests]
        }
        return {
            guests: updatedGuests
        }
    }

    if (action.type === 'UPDATE') {
        const exisitingGuestIndex = state.guests.findIndex((guest => guest.id === action.guest.id))
        let exisitingGuest = state.guests[exisitingGuestIndex]
        let updatedGuests

        if (exisitingGuest) {
            updatedGuests = [...state.guests]
            exisitingGuest.meals = action.guest.meals
            updatedGuests[exisitingGuestIndex] = exisitingGuest
        } else {
            updatedGuests = [...state.guests]
        }
        return { guests: updatedGuests }
    }

    return defaultGuestState
}

const ReservationProvider = (props) => {
    const [guestState, dispatchGuestAction] = useReducer(guestsReducer, defaultGuestState)
    const [] = useState()

    const addNewGuest = (guest) => {
        dispatchGuestAction({ type: 'ADD', guest: guest })

    }
    const removeGuest = (id) => {
        dispatchGuestAction({ type: 'REMOVE', id: id })
    }

    const updateGuest = (guest) => {
        dispatchGuestAction({ type: 'UPDATE', guest: guest })
    }



    const reservationContext = {
        guests: guestState.guests,
        addNewGuest: addNewGuest,
        removeGuest: removeGuest,
        updateGuest: updateGuest
    }

    return (
        <ReservationContext.Provider value={reservationContext}>
            {props.children}
        </ReservationContext.Provider>
    )
}

export default ReservationProvider