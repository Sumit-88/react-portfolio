import React, { forwardRef } from 'react';

function Home({text},ref) {
    return ( 
        <div className='mainBlock' id='Home'>
        <h1 ref={ref}>Home{text}</h1>
        </div>
     );
}

export default forwardRef(Home);