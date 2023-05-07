import React, { forwardRef } from 'react';

function Contact({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Contact{text}</h1>
        </div>
     );
}

export default forwardRef(Contact);