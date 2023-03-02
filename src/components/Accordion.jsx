// Sacado de getbootstrap.com

import React from 'react'
import { useState } from 'react'

function Accordion( props ) {

  
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div>
          <h3>{props.title}</h3>
          <button 
            onClick={() =>{
              setOpen(!open);
              }}>
                { open ? "Close" : "Open" }
          </button>
        </div>
        { open && <div> { props.children } </div> }
    </div>
  );
}

export default Accordion