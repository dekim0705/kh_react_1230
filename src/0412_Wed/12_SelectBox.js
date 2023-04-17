import {useState} from "react";

const FruitSelect = () => {
    const [value, setValue] = useState('grape');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert('FRUIT : ' + value);
        e.preventDefault(); // prevent from reloading the page
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Choose your fruit ❣️
                    <select value={value} onChange={handleChange}>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="grape">Grape</option>
                        <option value="watermelon">Watermelon</option>
                    </select>
                </label>
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
}

export default FruitSelect;

// When #onSubmit occurs, call #handleSubmit