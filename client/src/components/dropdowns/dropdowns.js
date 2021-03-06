import React, {useState} from 'react';
import './dropdown.css'


const Dropdown = ( props ) => {

    const [dropdownStatus, setDropdownstatus] = useState(false);

    const initDropdown = (e) => {
        e.preventDefault();
        setDropdownstatus(!dropdownStatus);
        
    }

    const initDropdwnDecision = (option) => {

        setDropdownstatus(!dropdownStatus)
  
        if(props.updateKey === 'templateType'){

            props.updateStep(2)

        } 
 
        const key = props.updateKey
        
        props.updateUserChoice({ [key] : option})
    
      

    }


    const renderList = props.options.map((option, index) => {

        return <li key = {index} onClick = {() => initDropdwnDecision(option)}>{option}</li>

    })


    return (
        <div className={props.fieldValidity === 'invalid' ? 'incomplete-dropdown dropdown-wrapper long-dropdown-position' :'dropdown-wrapper long-dropdown-position'}>
            <div>
                <button className='dropdown-options' onClick = {initDropdown}>  {props.prefill} </button>
            
            </div>
            <div>
                {dropdownStatus ? <ul className = 'dropdown-options'> {renderList} </ul> : null}
            </div>
        </div>
    )
}

export default Dropdown;

