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
            <RenderNameComponent updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donorNames}/>
            
            {/* <HonoringDropdown changeToHonorForm = {props.changeToHonorForm}/> */}

            <DonationAmount updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donationAmount}/>

            <DonationDate updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.donationDate}/>

            <EmailField updateUserChoice = {props.updateUserChoice} incompleteFields = {props.incompleteFields.recipientEmail}/>

            <TaxParaDropdown updateUserChoice = {props.updateUserChoice} userChoices = {props.userChoices}/>
            
        </div>

    )

}

export default DonationForm;
