import React, { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        { id:1, text:'Hi!' },
        { id:2, text:'Good Morning!' },
        { id:3, text:'Good Afternoon!' },
        { id:4, text:'Good Evening!' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange = e => setInputText(e.target.value);
    const onClick = () => { 
        const nextNames = names.concat({ 
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('') // empty inputText
    }
    // const namesList = names.map(name => <li key={ name.id }>{ name.text }</li>)
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
        // keep creating new array : filter(diff#e) != map(same#e)
    }
    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>
            {name.text}
        </li>
    ));

    // onChange() : updates 'inputText' state value
    // onClick() : adding a new object to the 'names'  array
    // concat() : when adding a new object, use 'nextId''s state value to set the object's 'id' attribute value, 
    //            and calls setNextId() to increase +1
    //           : Maintaining immutability using concat() to creat a new array 
    //             instead of modifying the existing array with push()

    
    return(
        <>
            <p className= 'title-name'>To Do List</p>
            <p>Double click to remove</p>
            <input type='text' value={ inputText } onChange= { onChange } />
            <button onClick= { onClick }>ADD</button>
            <ul>{namesList}</ul>
        </>
    );
}
export default IterationSample;