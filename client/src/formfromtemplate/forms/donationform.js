import React, {} from 'react';
import './newdonorform.css'
import RenderNameComponent from '../../components/inputfields/rendernamecomponent';
import DonationAmount from '../../components/inputfields/donationamount';
import DonationDate from '../../components/inputfields/donationdate';
import EmailField from '../../components/inputfields/emailfield';
import TaxParaDropdown from '../../components/dropdowns/taxparadropdwn/taxparadrpdwn';


const DonationForm = (props) => {

    // props.fieldValidity is an Array of objects rather than 1 big object 

    //also by default is false so it can't deconstruct in that state
    
    // const [donationAmountValidity, donationDateValidity, emailValidity, namesStatusValidity] = props.incompleteFields;

    //each field validity prop below calls a function to try and get their validity status. If there is none then return false and if there is then return the status 
   
    function getValidityStatus(field){
        // if false then there is nothing to show and we can move on to next page / field 
        const validityData = props.incompleteFields
        // console.log(validityData)
        if(validityData){

           const relevantValidationStatus = validityData.find(validityObj => {
                const key = Object.keys(validityObj)[0];
                
                return findMatch(field, key)
            })

            function findMatch(field, key){
                return (key === field ? true : false)
            }

            if(relevantValidationStatus !== undefined){
            
                const value = Object.values(relevantValidationStatus)[0];
                return value
            }

       
        } 
        //else 
        //false represents no concern 
        return false 
    }


    return(
        <div className='new-donor-form-wrapper'>
            <RenderNameComponent updateUserChoice = {props.updateUserChoice} fieldValidity = {getValidityStatus('namesStatus')} 
            updateKey = 'donorNames' inputLabel = 'Donor name:' cssClass='donor-name-wrapper' type = 'donor form' userChoices = {props.userChoices}/>

            <DonationAmount updateUserChoice = {props.updateUserChoice} fieldValidity = {getValidityStatus('donationAmount')} userChoices = {props.userChoices}/>

            <DonationDate updateUserChoice = {props.updateUserChoice} fieldValidity = {getValidityStatus('donationDate')} userChoices = {props.userChoices}/>

            <EmailField updateUserChoice = {props.updateUserChoice} fieldValidity = {getValidityStatus('recipientEmail')} userChoices = {props.userChoices} value = {props.userChoices.recipientEmail} updateKey = 'recipientEmail'/>

            <TaxParaDropdown updateUserChoice = {props.updateUserChoice} userChoices = {props.userChoices} userChoices = {props.userChoices}/>

            
        </div>

    )

}

export default DonationForm;

