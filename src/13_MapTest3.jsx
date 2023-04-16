import React from "react";

// Create components and pass them down as props
// const User = (props) => {

//     return(
//         <>
//             <b>{props.user.userName}</b><span>{props.user.eMail}</span>
//         </>
//     );
// }

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

    const numbers = [1,2,3,4,5];
    // const listItems = numbers.map(e =><li><b>{e}</b></li>);
    // getting 5 <li> tags cuz 5 elements in numbers array 

    return(
        <>
            {/* <ul>{listItems}</ul>     */}
            
            <ul>{numbers && numbers.map(e =><li><b>{e}</b></li>)}</ul>

            {/* when there's numbers array, iterate numbers array using map() 
                and return a new array after wrapping each element with <li> tag.
                Lastly, use {} to wrap the returned new array with <ul> and print it.
                So, unless 'numbers'array is empty, all the elements of 'numbers' array 
                will be printed under <ul> and <li>*/}
            {/* {users && users.map(user => <div><b>{user.userName}</b><span>{user.eMail}</span></div>)} */}
            
            {/* a unit 'key' prop should be assigned to each element
                'key' prop : is a special property that helps React identify which itmes have been 
                            added, changed, or removed from the array.
                            Without it, it might not be able to update the list efficiently -> lead to bugs  */}
            <ul> {users && users.map(user => 
                <li key={user.id}>
                    <b>{user.userName}</b>
                    <span>{user.eMail}</span>
                </li>)}
            </ul>
        </>
    );

}
export default MapTest;

