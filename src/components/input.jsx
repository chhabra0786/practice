import React, { useState } from 'react'

function Input() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Entered number: ${input}`);
    };

    return (
        <div>
            <input 
                type="number"  
                placeholder='Enter your number' 
                value={input}
                onChange={handleChange}
                className="border p-2"
            />
            <button 
                onClick={handleSubmit} 
                className='m-8 text-white bg-amber-600 py-2 px-4 rounded'
            >
                Submit
            </button>
        </div>
    )
}

export default Input
