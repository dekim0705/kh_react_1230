import { useState } from "react";

const EventHandler = () => {
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUserName = e => setUserName(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(userName + ' : ' + message);
        setUserName('');
        setMessage('');
    }
    // after the alert, remove the typed value    
    const onKeyDown = e => {
        if(e.key === "Enter") onClick();
    }
    // makes pressing "Enter" key as same as clicking the button 

    return(
        <>
            <h1>Event Handler #2</h1>
            <input type="text" name="username" placeholder="Type Your Name" value={userName} onChange={onChangeUserName} />
            <input type="text" name="message" placeholder="Type Anything" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
            <button onClick={onClick}> CHECK </button>
        </>
    );
}
//onKeyPress: A KeyboardEvent handler function. Deprecated. Use onKeyDown or onBeforeInput instead.

export default EventHandler;



/*
// EventHandler
const EventHandler = () => {
    const [message, setMessage] = useState("Hello!");
    // const changeMsg = (e) => {
    //     setMessage(e.target.value);
    // }

    return(
        <>
            <h1>Event Handler</h1>
            // <input type="text" name="message" placeholder="TYPE ANYTHING" onChange={changeMsg} /> 
            <input type="text" name="message" placeholder="TYPE ANYTHING" onChange={(e)=>setMessage(e.target.value)} />
            <h2>Message : {message}</h2>
        </>
    );
}
// onChange event calls changeMsg function whenever change occurs (such as keyboard input)
// change occurs -> calls changeMsg -> calls setMessage(redering)
// compare message and setMessage -> if there's change, it renders
// In this case, redering works when every single letter is being typed. 
*/