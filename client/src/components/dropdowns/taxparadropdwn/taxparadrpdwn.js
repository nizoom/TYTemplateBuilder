import React from 'react';
import Dropdown from '../dropdowns';

const TaxParaDropdown = () => {
    return (

        <div className='tax-para-wrapper'>
            <label className = 'template-field-name'> Tax Paragraph: </label>

            <Dropdown options = {['Yes', 'No']} prefill = 'Yes' cssClass = 'long-dropdown'/> 

        </div>
    )
}

export default TaxParaDropdown;

