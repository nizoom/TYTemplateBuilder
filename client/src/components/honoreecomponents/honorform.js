import React, {useState, useEffect} from 'react';
import Dropdown from '../dropdowns/dropdowns'
import '../nextstepbtn/nextstepbtn.css'
import './honoree.css'
import RenderNameComponent from '../inputfields/rendernamecomponent'
import CustomMsg from './custommsg';
import EmailField from '../inputfields/emailfield';
import { honorFormValidation } from '../../validation';
import { assembleLanguage } from '../../mailer/assemblelanguage';
import HonorerMsg from './honorermsg';

const HonorForm = (props) => {

    //track user inputs


    const [honoringUserChoices, setHonoringUserChoices] = useState({
            honorForm: 'Donation in honor?',
            honoringOrMemory : 'in Honor or in Memory',
            honoreeName : [],
            recipientName : [],
            honoreeEmail : '',
            customMsg: ''
    })

    function updateHonorUserChoice(choice){

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
    props.getHonorState(honoringUserChoices)
  }, [honoringUserChoices])

  // console.log(honoringUserChoices.honoreeEmail)

   function determineNamesValue(property, updateKey){

    if(property.length < 1){
      // console.log('nothing here')
      return ''
    }
    //these are not donornames but we are relying on these property names since they are provided by rendernamescomponenet 
    const firstName = honoringUserChoices[updateKey][0].donorFirstName
    const lastName = honoringUserChoices[updateKey][0].donorLastName

    return [firstName, lastName]

   }

   const [incompleteFields, setIncompleteFields] = useState(false)



   function handleSubmit(e){
     e.preventDefault();

     if(honoringUserChoices.honorForm !== 'No'){ // there is an honor form
       const fieldValidity = honorFormValidation(honoringUserChoices)
       setIncompleteFields(fieldValidity)
       if(fieldValidity === 'submit'){
          assembleLanguage(honoringUserChoices, props.userChoices)
       }
     } else {
      console.log('submitting');
     }
     
   }



   function getValidityStatus(field, index){

    //default state of this hook before hitting submit
     if(!incompleteFields || incompleteFields ==='submit'){
       return 'valid'
     }
   
     
     const validityObj = incompleteFields[index];

     const validity = Object.values(validityObj)[0]


     return validity

   }


   
    return (
        <div className='honor-form-wrapper'>
            <div className='honor-dropdwn-wrapper'>
              <label className = 'template-field-name'> Honoring: </label>

              <Dropdown prefill = {honoringUserChoices.honorForm} cssClass = 'long-dropdown'  options = {['Yes', 'No']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honorForm'/>

            
            </div>
       

            { honoringUserChoices.honorForm === 'Yes' ? 
            
           

               <section className='honoree-fields-wrapper'>

                 <HonorerMsg/>

                <div className='in-honor-memory-wrapper'>

                  <label className = 'template-field-name' style = {{fontSize : 'medium'}}> Honoring/Memory: </label>

                  <Dropdown prefill = {honoringUserChoices.honoringOrMemory} options = {['In honor of', 'In memory of']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honoringOrMemory'
                  fieldValidity = {getValidityStatus('honoringOrMemory', 1)}
                  />
                
                </div>          


            
                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'honoreeName' inputLabel = 'Honoree name:' cssClass = 'honoree-name-field' type = 'honoreeName' 
                userCoices = {honoringUserChoices} value = {determineNamesValue(honoringUserChoices.honoreeName, 'honoreeName')}
                
                fieldValidity = {getValidityStatus('honoreeName', 3)} 
                validationPropertyName = 'honoree' />            

                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'recipientName' inputLabel = 'Recipient name:' cssClass = 'recipient-name-field' type = 'recipientName' 
                value = {determineNamesValue(honoringUserChoices.recipientName, 'recipientName')} 

                fieldValidity = {getValidityStatus('recipient', 2)} 
                validationPropertyName = 'recipient'  />           
          
                
                
                
                <CustomMsg updateKey = 'customMsg' updateUserChoice = {updateHonorUserChoice}/>

                <EmailField cssClass = 'honoree-email' updateKey = 'honoreeEmail' value = {honoringUserChoices.honoreeEmail} updateUserChoice = {updateHonorUserChoice} fieldValidity = {getValidityStatus('honoreeEmail', 0)}/>
       
                </section>
            
            : null

            }
           { honoringUserChoices.honorForm === 'Donation in honor?' ? null :
           
              <div className='submit-stp-wrapper'>

                    <button type = 'submit' className = 'next-stp-btn submit-btn' onClick = {handleSubmit}> Submit </button>
                </div>
            }
        </div>
    )
}

export default HonorForm;
