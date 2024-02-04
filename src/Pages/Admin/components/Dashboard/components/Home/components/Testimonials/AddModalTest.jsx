import React from 'react'
import "./style/testimonials.css";


function AddModalTest(props) {

    return (props.trigger) ? (
    <div className='addModalTest'>
        <div className='addModalTest-inner'>
            {props.children}
        </div>
    </div>
    ) : null;
}

export default AddModalTest
