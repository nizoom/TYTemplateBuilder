import React, {useState, useEffect} from 'react';
import Dropdown from '../dropdowns/dropdowns'
import '../nextstepbtn/nextstepbtn.css'
import './honoree.css'
import RenderNameComponent from '../inputfields/rendernamecomponent'
import CustomMsg from './custommsg';
import EmailField from '../inputfields/emailfield';
import { honorFormValidation } from '../../validation';

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

     if(honoringUserChoices.honorForm !== 'No'){
       const fieldValidity = honorFormValidation(honoringUserChoices)
       console.log(fieldValidity)
       setIncompleteFields(fieldValidity)
     } else {
      console.log('submitting');
     }
     
   }

   
   function getValidityStatus(field){
    //default state of this hook before hitting submit
     if(!incompleteFields){
       return 'valid'
     }
      //get index of where field is mentioned in the validation state arr of objs
     const keys = incompleteFields.map(obj => {
        const keys = Object.keys(obj)[0]
        return keys
     })

     const indexOfProperty = keys.indexOf(field);

     //return the value of that property 
     const value = Object.values(Object.values(incompleteFields)[indexOfProperty])[0] // drills down to the 'valid' / 'invalid' value 

    //  console.log(value)
     return value 
   }


   
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

                  <Dropdown prefill = {honoringUserChoices.honoringOrMemory} options = {['In honor of', 'In memory of']} updateUserChoice = {updateHonorUserChoice} updateKey = 'honoringOrMemory'
                  fieldValidity = {getValidityStatus('honoringOrMemory')}
                  />
                
                </div>          


            
                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'honoreeName' inputLabel = 'Honoree name:' cssClass = 'honoree-name-field' type = 'honoreeName' 
                userCoices = {honoringUserChoices} value = {determineNamesValue(honoringUserChoices.honoreeName, 'honoreeName')}
                
                fieldValidity = {getValidityStatus('honoreeName')} 
                validationPropertyName = 'honoree' />            

                <RenderNameComponent  updateUserChoice = {updateHonorUserChoice} updateKey = 'recipientName' inputLabel = 'Recipient name:' cssClass = 'recipient-name-field' type = 'recipientName' 
                value = {determineNamesValue(honoringUserChoices.recipientName, 'recipientName')} 

                fieldValidity = {getValidityStatus('recipient')} 
                validationPropertyName = 'recipient'  />           
          
                
                
                
                <CustomMsg updateKey = 'customMsg' updateUserChoice = {updateHonorUserChoice}/>

                <EmailField cssClass = 'honoree-email' updateKey = 'honoreeEmail' value = {honoringUserChoices.honoreeEmail} updateUserChoice = {updateHonorUserChoice} fieldValidity = {getValidityStatus('honoreeEmail')}/>
       
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
