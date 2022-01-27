import React from 'react';
import './newdonorform.css'
import RenderNameComponent from '../../components/inputfields/rendernamecomponent';
import HonoringDropdown from '../../components/honoreecomponents/honoringdropdown';
import DonationAmount from '../../components/inputfields/donationamount';
import DonationDate from '../../components/inputfields/donationdate';
import EmailField from '../../components/inputfields/emailfield';
import TaxParaDropdown from '../../components/dropdowns/taxparadropdwn/taxparadrpdwn';


const DonationForm = (props) => {


    return(
        <div className='new-donor-form-wrapper'>
            <RenderNameComponent updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donorNames} 
            updateKey = 'donorNames' inputLabel = 'Donor name:' cssClass='donor-name-wrapper' type = 'donor form' userChoices = {props.userChoices}/>

            <DonationAmount updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donationAmount} userChoices = {props.userChoices}/>

             <DonationDate updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donationDate} userChoices = {props.userChoices}/>

            <EmailField updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.recipientEmail} userChoices = {props.userChoices}/>

            <TaxParaDropdown updateUserChoice = {props.updateUserChoice} userChoices = {props.userChoices} userChoices = {props.userChoices}/>

            
        </div>

    )

}

export default DonationForm;

