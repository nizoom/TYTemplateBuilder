import React, {useState} from 'react';
import './dropdown.css'


const Dropdown = ( props ) => {

    const [dropdownStatus, setDropdownstatus] = useState(false);

    const initDropdown = (e) => {
        e.preventDefault();
        setDropdownstatus(!dropdownStatus);
        
    }

    const initTemplateDecision = (option) => {
        setDropdownstatus(!dropdownStatus)
        props.updateUserChoice({templateType : option})

    }


    const renderList = props.options.map((option, index) => {

        return <li key = {index} onClick = {() => initTemplateDecision(option)}>{option}</li>

    })


   

    return (
        <div className='dropdown-wrapper long-dropdown-position'>
            <div>
                <button className={props.cssClass} onClick = {initDropdown}>  {props.prefill} </button>
            
            </div>
            <div>
                {dropdownStatus ? <ul className = 'dropdown-options'> {renderList} </ul> : null}
            </div>
        </div>
    )
}

export default Dropdown;

