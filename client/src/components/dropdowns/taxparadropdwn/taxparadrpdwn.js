import React from 'react';
import Dropdown from '../dropdowns';

const TaxParaDropdown = (props) => {

    const prefill = props.userChoices.taxParagraph === "Yes" ? "Yes" : "No"

    return (

        <div className='tax-para-wrapper'>
            <label className = 'template-field-name'> Tax Paragraph: </label>

            <Dropdown options = {['Yes', 'No']} prefill = {prefill} cssClass = 'long-dropdown' updateUserChoice = {props.updateUserChoice} updateKey = 'taxParagraph'/> 

        </div>
    )
}

export default TaxParaDropdown;

