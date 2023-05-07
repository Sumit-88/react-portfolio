import React, { forwardRef } from 'react';

function Skills({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Skills{text}</h1>
        </div>
     );
}

export default forwardRef(Skills);