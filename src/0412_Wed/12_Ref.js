import {useRef} from "react";

const CreateRef = () => {
    const inputRef = useRef(null);;

    function handleFocus() {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    return(
        <>
            <input disabled type="text" ref={inputRef} />
            {/* ref={inputRef} -> the object which 'inputRef' references is this <input> element.*/}
            <button onClick={handleFocus}>ACTIVATE</button>
        </>
    );
}
export default CreateRef;

// how to find the input tag when the button is clicked
