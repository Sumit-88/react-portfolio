import React, { forwardRef } from 'react';

function Testimonial({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Testimonial{text}</h1>
        </div>
     );
}

export default forwardRef(Testimonial);