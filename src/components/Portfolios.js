import React, { forwardRef } from 'react';

function Portfolios({text},ref) {
    return ( 
        <div className='mainBlock'>
        <h1 ref={ref}>Portfolios{text}</h1>
        </div>
     );
}

export default forwardRef(Portfolios);