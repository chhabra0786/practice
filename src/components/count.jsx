import React, { useState } from 'react'

function Count() {
    const [counter,setCounter]=useState(0);
    const handleclick=()=>{
        if (counter===10) {
            setCounter(0);
        }
        else{
        setCounter(counter+1);
        }  
    };
   
  return (
    <div> 
        <button className='px-5 py-10 bg-amber-700 text-2xl text-white ' onClick={handleclick}   >  counter</button>
    
            
        
        <p>Current Count: {counter}</p>
    {counter===5 && <p>Halfway complete!</p>}
    {counter===10 && <p>Target  complete!</p>}

    </div>
  )
}

export default Count