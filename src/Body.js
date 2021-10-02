import React, { useState } from 'react'

export default function Body({heading}) {

const [text, setText] = useState('');

const handleUpButton = () => {
    const Txt = text.toUpperCase();
    setText(Txt);
}

const handleLoButton = () => {
    const Txt1 = text.toLowerCase();
    setText(Txt1);
}

const handleCopy = ()=> {
    const text = document.getElementById('text');
    text.select();
    navigator.clipboard.writeText(text.value);
}

const clear = () =>{
    setText('');
}

const handleOnchange = (event) =>{
    setText(event.target.value);
}

    return (
        <div className="container">
            <div className="body">
                <h2>{heading}</h2>
                <textarea value={text} id="text" onChange={handleOnchange} cols="100" rows="10"></textarea>
                <button className="up-btn" onClick={handleUpButton}>Convert to UpperCase</button>
                <button className="low-btn" onClick={handleLoButton}>Convert to Lowercase</button>
                <button className="copy-btn" onClick={handleCopy}>Copy Text</button>

                <button className="clear" onClick={clear}>Clear</button>
                <p>{text.split(/\s+/).filter(element=>element.length!==0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split('').length} Minutes to read</p>
                <h2>Preview you text here!</h2>
                <p>{text}</p>


            </div>
        </div>
    )
}
