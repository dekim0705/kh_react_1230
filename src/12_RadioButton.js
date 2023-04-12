import {useState} from "react";

const RadioButton = () => {
    const [selectedValue, setSelectedValue] = useState('apple');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <>
            <input type="radio" name="fruits" value="apple" onChange={handleChange} />
            <label>Apple</label>
            <br />
            <label>
                <input type="radio" name="fruits" value="orange" onChange={handleChange} />
                Orange
            </label>
            <br />
            <input type="radio" name="fruits" value="strawberry" onChange={handleChange} />
            <label>Strawberry</label>
            <br />
            <p>Selected value: <span style={{fontWeight: "bold"}}>{selectedValue}</span></p>
        </>
    );
    
}

export default RadioButton; 