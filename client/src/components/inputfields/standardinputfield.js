import React from 'react';
import './inputfields.css'

const StandardInputField = (props) => {

    return(
        <div className='input-field-position'>
          <input className={props.cssClass} placeholder={props.prefill}/>
        </div>
    )
}

export default StandardInputField;

//   <input className={props.cssClass} > {props.prefill}</input>