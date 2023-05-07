import React, { forwardRef } from 'react';

function About({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>About{text}</h1>
        </div>
     );
}

export default forwardRef(About);