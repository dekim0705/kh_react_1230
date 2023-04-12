import { useState } from "react";

const EventHandler = () => {
    const [message, setMessage] = useState("Hello!");
    // const changeMsg = (e) => {
    //     setMessage(e.target.value);
    // }

    return(
        <>
            <h1>Event Handler</h1>
            {/* <input type="text" name="message" placeholder="TYPE ANYTHING" onChange={changeMsg} /> */}
            <input type="text" name="message" placeholder="TYPE ANYTHING" onChange={(e)=>setMessage(e.target.value)} />
            <h2>Message : {message}</h2>
        </>
    );
}

export default EventHandler;

// onChange event calls changeMsg function whenever change occurs (such as keyboard input)
// change occurs -> calls changeMsg -> calls setMessage(redering)
// compare message and setMessage -> if there's change, it renders
// In this case, redering works when every single letter is being typed. 
// 