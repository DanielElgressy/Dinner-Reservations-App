import React from "react";

const ReservationContext = React.createContext({
    guests: [],
    addNewGuest: (guest) => { },
    removeGuest: (id) => { }
})

export default ReservationContext; 