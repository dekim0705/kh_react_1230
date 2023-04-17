import React from "react";

// INEFFICIENT way!!! : use an array as it is
// always remember : an array comes with index number
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
            <div>
                <b>{users[0].userName}</b> <span>{users[0].eMail}</span>
            </div>
            <div>
                <b>{users[1].userName}</b> <span>{users[1].eMail}</span>
            </div>
            <div>
                <b>{users[2].userName}</b> <span>{users[2].eMail}</span>
            </div>
        </>
    );

}
export default MapTest;
