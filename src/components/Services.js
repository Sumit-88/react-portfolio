import React, { forwardRef } from 'react';

function Services({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Services{text}</h1>
        </div>
     );
}

export default forwardRef(Services);