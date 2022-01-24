import React, {useState, useEffect} from 'react';
import Dropdown from '../dropdowns/dropdowns'
import '../nextstepbtn/nextstepbtn.css'
import './honoree.css'
import RenderNameComponent from '../inputfields/rendernamecomponent'


const HonorForm = (props) => {

    //track user inputs


    const [honoringUserChoices, setHonoringUserChoices] = useState({
            honorForm: 'Donation in honor?',
            honoreeName : '',
            recipientName : '',
            honoreeEmailAddress : ''
    })

    function updateHonorUserChoice(choice){
    
    // console.log(Object.keys(choice))
    const [keyName] = Object.keys(choice);
    const [valueName] = Object.values(choice)
    // console.log(`${keyName} : ${valueName}`)
    setHonoringUserChoices({
      ...honoringUserChoices,
      [keyName] : valueName
    })

    // console.log(userChoices)
  } 

  useEffect(() => {
      console.log(honoringUserChoices)
  }, [honoringUserChoices])

    
    return (
        <div className='form-wrapper'>
            <label className = 'template-field-name'> Honoring: </label>
            <Dropdown prefill = {honoringUserChoices.honorForm} cssClass = 'long-dropdown'  options = {['Yes', 'No']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honorForm'/>
            { honoringUserChoices.honorForm === 'Yes' ? 
            
            <div className='honoree-field-wrapper'> 
              <RenderNameComponent updateUserChoice = {updateHonorUserChoice} updateKey = 'honoreeName' inputLabel = 'Honoree name:' cssClass = 'honoree-name-field' type = 'honor form'/>
            </div> : 
            <div className='donation-amount-wrapper'>
                Continue
            </div>

            }
            <div className='submit-stp-wrapper'>

                <button type = 'submit' className = 'next-stp-btn'> Submit </button>
            </div>
        </div>
    )
}

export default HonorForm;


                //   <Dropdown  prefill = {userChoices.templateType} cssClass = 'long-dropdown' 
                //   options = {['New donor', 'Recurring donor']} updateUserChoice = {updateUserChoice} updateStep = {updateStep} updateKey = 'templateType'/> 