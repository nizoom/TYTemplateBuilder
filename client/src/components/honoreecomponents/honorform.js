import React, {useState, useEffect} from 'react';
import Dropdown from '../dropdowns/dropdowns'
import '../nextstepbtn/nextstepbtn.css'
import './honoree.css'
import RenderNameComponent from '../inputfields/rendernamecomponent'
import CustomMsg from './custommsg';

const HonorForm = (props) => {

    //track user inputs


    const [honoringUserChoices, setHonoringUserChoices] = useState({
            honorForm: 'Donation in honor?',
            honoringOrMemory : 'in Honor or in Memory',
            honoreeName : '',
            recipientName : '',
            honoreeEmailAddress : '',
            customMsg: ''
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

  // useEffect(() => {
  //     console.log(honoringUserChoices)
  // }, [honoringUserChoices])

    
    return (
        <div className='honor-form-wrapper'>
            <div className='honor-dropdwn-wrapper'>
              <label className = 'template-field-name'> Honoring: </label>

              <Dropdown prefill = {honoringUserChoices.honorForm} cssClass = 'long-dropdown'  options = {['Yes', 'No']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honorForm'/>
            </div>

            { honoringUserChoices.honorForm === 'Yes' ? 


               <section className='honoree-fields-wrapper'>

                <div className='in-honor-memory-wrapper'>

                  <label className = 'template-field-name' style = {{fontSize : 'medium'}}> Honoring/Memory: </label>

                  <Dropdown prefill = {honoringUserChoices.honoringOrMemory} cssClass = 'long-dropdown'  options = {['In honor of', 'In memory of']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honorForm'/>
                
                </div>                

                            
            
                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'honoreeName' inputLabel = 'Honoree name:' cssClass = 'honoree-name-field' type = 'honor form'/>            

                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'honoreeName' inputLabel = 'Recipient name:' cssClass = 'recipient-name-field' type = 'honor form'/>           
          
                <CustomMsg/>
       
                </section>
            
            : null

            }
            <div className='submit-stp-wrapper'>

                <button type = 'submit' className = 'next-stp-btn submit-btn'> Submit </button>
            </div>
        </div>
    )
}

export default HonorForm;


                //   <Dropdown  prefill = {userChoices.templateType} cssClass = 'long-dropdown' 
                //   options = {['New donor', 'Recurring donor']} updateUserChoice = {updateUserChoice} updateStep = {updateStep} updateKey = 'templateType'/> 