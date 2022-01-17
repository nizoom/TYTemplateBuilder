import React from 'react';
import './newdonorform.css'
import RenderNameComponent from '../../components/inputfields/rendernamecomponent';
import HonoringDropdown from '../../components/honoreecomponents/honoringdropdown';
import DonationAmount from '../../components/inputfields/donationamount';
import DonationDate from '../../components/inputfields/donationdate';
import EmailField from '../../components/inputfields/emailfield';
import TaxParaDropdown from '../../components/dropdowns/taxparadropdwn/taxparadrpdwn';


const NewDonorForm = (props) => {

    //  THIS MAY BE THE SAME AS RECURRING DONOR FORM BC THE ONLY DIFFERENCE IS IN THE COPY LANGUAGE 

    return(
        <div className='new-donor-form-wrapper'>
            <RenderNameComponent updateUserChoice = {props.updateUserChoice}/>
            
            <HonoringDropdown changeToHonorForm = {props.changeToHonorForm}/>

            <DonationAmount updateUserChoice = {props.updateUserChoice}/>

            <DonationDate updateUserChoice = {props.updateUserChoice}/>

            <EmailField updateUserChoice = {props.updateUserChoice}/>

            <TaxParaDropdown/>
            
        </div>

    )

}

export default NewDonorForm;
