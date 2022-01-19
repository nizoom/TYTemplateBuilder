import React, {useState, useEffect} from 'react';
import './inputfields.css'
import CurrencyInput from 'react-currency-input-field';

const DonationAmount = (props) => {

    const [dollar, setDollar] = useState('0')

    // function handleAmountChange(value, name){
    //     console.log(value)
    //     console.log(name)
    // }

    useEffect(() => {
       props.updateUserChoice({donationAmount: dollar})
    },[dollar])

    return (
        <div className='donation-amount-wrapper'>
            <label> Amount Given: </label>
            <CurrencyInput   prefix='$' className='short-input-field' placeholder='$' onValueChange={(value, name) => setDollar(value)}/> 
        </div>
    )
}

export default DonationAmount;

// className='short-input-field'