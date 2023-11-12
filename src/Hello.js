import React, { useState } from 'react';


function Hello() {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayText(text);
    }

    const promptStyle = {
        color: 'white'
    }

    const helloStyle = {
        backgroundColor: 'midnightblue',
        padding: '20px',
        fontFamily: 'sans-serif'
    }


    return (
        <div style={helloStyle}>
            <br></br>
            <p style={promptStyle}>Enter your name: {displayText}</p>
            <form>
                <input type="text" value={text} onChange={handleChange} />
                <input type="button" value="Submit" onClick={handleSubmit} />
            </form><br></br>
        </div>
    );
}


export default Hello;