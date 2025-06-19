import React, { useState } from 'react';
import './practice.css'

const Click = () => {
    const [color,setColor] = useState("red");
}

const Practice = () => {
    return (
    <div>
        <h1>Add Notes</h1>
        <form>
            <input id='list' type="text" />
            <button onClick={Click}>Add List</button>
        </form>
        <div>
            <h2>Notes</h2>
            <div>
                <h1>{color}</h1>
            </div>
        </div>
    </div>
    )
}

export default practice