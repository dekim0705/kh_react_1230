import React, { useTransition } from "react";

// Create components and pass them down as props
const User = (props) => {

    return(
        <>
            <b>{props.user.userName}</b><span>{props.user.eMail}</span>
        </>
    );
}

const MapTest = () => {
    const users = [
        {
            id : 100, 
            userName : 'Meredith',
            eMail : '100meredith@gmail.com'
        },
        {
            id : 200, 
            userName : 'Christina',
            eMail : '200christina@gmail.com'
        },
        {
            id : 300, 
            userName : 'Izzie',
            eMail : '300izzie@gmail.com'
        }
    ]

    return(
        <>
            <div><User user={users[0]} /></div>
            <div><User user={users[1]} /></div>
            <div><User user={users[2]} /></div>
            
        </>
    );

}
export default MapTest;

