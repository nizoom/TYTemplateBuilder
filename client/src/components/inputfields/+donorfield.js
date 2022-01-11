import React from 'react';
import './inputfields.css';

const AddDonorBtn = (props) => {

    const initDonorFieldChange = (e) => {

        e.preventDefault();

     
        props.changeNumberOfNameFields();
 
    }


    return (
        <div className = 'add-donor-btn-wrapper'>
            <button className='add-donor-btn' onClick={initDonorFieldChange}> {props.operation} </button>
            <p className='tooltip'> {props.tooltipMsg} </p>
        </div>
    )
}

export default AddDonorBtn;