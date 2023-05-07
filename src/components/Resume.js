import React, { forwardRef } from 'react';

function Resume({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Resume{text}</h1>
        </div>
     );
}

export default forwardRef(Resume);