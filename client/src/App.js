import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
import Visualizer from './emailvisualizer/visualizer';
import PresentForm from './formfromtemplate/presentform';
import NextStepBtn from './components/nextstepbtn/nextstepbtn'

import React, {useState, useEffect} from 'react'

function App() {


  // track all user inputs on the form

  const [userChoices, setUserChoices] = useState({
    // maybe add template type to this object rather than having a seperate hook for that 
      templateType : 'Choose Template Type',
      donationAmount: '0',
      donationDate : 'mm/dd/yyyy',
      recipientEmail : '',
      taxParagraph : 'Yes',
      donorNames : [] //arr of objects with firstName and lastName properties for each element    
  })


  function updateUserChoice(choice){
    
    // console.log(Object.keys(choice))
    const [keyName] = Object.keys(choice);
    const [valueName] = Object.values(choice)
    // console.log(`${keyName} : ${valueName}`)
    setUserChoices({
      ...userChoices,
      [keyName] : valueName
    })

    // console.log(userChoices)
  } 


  const [stepStr, setStepStr] = useState('Step 1: Choose template type')

  function updateStep (update) {
    setStepStr('Step 2: Fill out form')
  }

  //create state obj to track invalid inputs preventing next click 

  const [incompleteFields, setIncompleteFields] = useState({
      donationAmount: false,
      donationDate : false,
      recipientEmail : false,
      donorNames : false 
  })

  function reportIncompleteFields(fields){
    
    const newValidationState = {...incompleteFields}

    for(const property in newValidationState){
      //property is key and newValidationState[property] is value

        //if a field in the list of invalid fields is there then mark that field as truly invalid in the newValidationState obj
        if(fields.includes(property)){
          newValidationState[property] = true;
        } else {  //if property is not included in fields arr then mark as false / complete
          newValidationState[property] = false
        }
    }

    setIncompleteFields(newValidationState)
  } 

  // useEffect(() => {
  //   console.log(incompleteFields)
  // }, [incompleteFields])

  return (

    <div className="App">
      <header className="App-header">
        <h1 className = 'app-title'> Custom Email Template Builder </h1>
        <h2 className = 'sub-title'> Custom thank you emails made easy </h2>
      </header>

      <h3 className='step'> {stepStr} </h3>

      <div className='form-visualizer-grid'>

          <form className = 'main-form'>
            <div className = 'form-wrapper'>


                  <label className = 'template-field-name'> Template Type: </label>

                  <Dropdown  prefill = {userChoices.templateType} cssClass = 'long-dropdown' 
                  options = {['New donor', 'Recurring donor']} updateUserChoice = {updateUserChoice} updateStep = {updateStep} updateKey = 'templateType'/> 

                  <PresentForm templateType = {userChoices.templateType} updateUserChoice = {updateUserChoice} userChoices = {userChoices} incompleteFields = {incompleteFields}/>



            </div>

                 {userChoices.templateType === 'Choose Template Type' ? null : <NextStepBtn userChoices = {userChoices} reportIncompleteFields = {reportIncompleteFields}/> }
        
          </form>

        <Visualizer userChoices = {userChoices}/>


      </div>
  
    </div>
  );
}

export default App;
