import React from 'react'
import "./style/testimonials.css";


function EditModalTest(props) {

    return (props.trigger) ? (
    <div className='editModalTest'>
        <div className='editModalTest-inner'>
            {props.children}
        </div>
    </div>
    ) : null;
}

export default EditModalTest