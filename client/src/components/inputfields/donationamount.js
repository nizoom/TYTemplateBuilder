import React, {useState, useEffect} from 'react';
import './inputfields.css'
import CurrencyInput from 'react-currency-input-field';

const DonationAmount = (props) => {

    const [dollar, setDollar] = useState(props.userChoices.donationAmount)

    // console.log(props.userChoices.donationAmount)

    useEffect(() => {
       props.updateUserChoice({donationAmount: dollar})
    },[dollar])

    // console.log(props.fieldValidity)

    return (
        <div className='donation-amount-wrapper'>
            <label> Amount Given: </label>
            <CurrencyInput   prefix='$' className= {props.fieldValidity === 'invalid' ?  'incomplete' : 'short-input-field'} 
            placeholder={props.incompleteFields  ? '$ required' : `$ ${props.userChoices.donationAmount}`} onValueChange={(value, name) => setDollar(value)}/> 
        </div>
    )
}

export default DonationAmount;

