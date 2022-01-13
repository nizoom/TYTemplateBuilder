import React from 'react';
import Dropdown from '../dropdowns/dropdowns';
import './honoree.css'

const HonoringDropdown = (props) => {

    function determineHonorInit (choice) {
        if(choice === 'Yes'){
           
            props.changeToHonorForm();
        } else {
           
        }
        
    }

    return (
        <div className='init-honoring-wrapper'>
            <label className = 'template-field-name'> Donor Honoring: </label>
            <Dropdown prefill = 'Has the donor chosen to honor someone?' options = {['N/A', 'Yes']} cssClass = 'long-dropdown' getDropdownDecision = {determineHonorInit}/>
        </div>
    )
}

export default HonoringDropdown;

