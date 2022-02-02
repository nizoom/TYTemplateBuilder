import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
import Visualizer from './emailvisualizer/visualizer';
import PresentForm from './formfromtemplate/presentform';
import NextStepBtn from './components/nextstepbtn/nextstepbtn'

import React, {useState, useEffect, useRef} from 'react'

function App() {


  // track all user inputs on the form

  const [userChoices, setUserChoices] = useState({
    // maybe add template type to this object rather than having a seperate hook for that 
      templateType : 'Choose Template Type',
      donationAmount: 0,
      donationDate : 'mm-dd-yyyy',
      recipientEmail : '',
      taxParagraph : 'Yes',
      donorNames : [] //arr of objects with firstName and lastName properties for each element    
  })


  function updateUserChoice(choice){
    // console.log(choice)
    
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
    switch (update) {
      case 2 : {
          setStepStr('Step 2: Fill out donor form')
          break;
      }
      case 3: {
        setStepStr('Step 3: Fill out honoree form')
        break;
      }
    }

  }

  //create state obj to track invalid inputs preventing next click 

  const [incompleteFields, setIncompleteFields] = useState({
      donationAmount: false,
      donationDate : false,
      recipientEmail : false,
      donorNames : false 
  })

  function reportIncompleteFields(fields){
    // setIncompleteFields(fields)
  } 


  const [formPage, setFormPage] = useState(2)

  function goTotNextPreviousForm (direction){

    // direction is + 1 or - 1
    if(direction > 0) {
      setFormPage(formPage + 1)
     
    } else {
      setFormPage(formPage  - 1)
    }

    //setFormPage as such 

  }

  // useEffect(() => {
  //   console.log(userChoices)
  // }, [userChoices])

  const [honorState, setHonorState] = useState('')
  
  const getHonorState = (state) => {
    if(state!== undefined){
      setHonorState(state)
    }
  }




  return (

    <div className="App">
      <header className="App-header">
        <h1 className = 'app-title'> Custom Email Template Builder </h1>
        <h2 className = 'sub-title'> Custom thank you emails made easy </h2>
      </header>

      <h3 className='step'> {stepStr} </h3>

      <div className='form-visualizer-grid'>

          <form className = 'main-form'>
            <div>


                 { formPage === 1 ? 
             
                  <div className= 'form-wrapper'> <label className = 'template-field-name'> Template Type: </label>

                  <Dropdown  prefill = {userChoices.templateType} cssClass = 'long-dropdown' 
                  options = {['New donor', 'Recurring donor']} updateUserChoice = {updateUserChoice} updateStep = {updateStep} updateKey = 'templateType'/> 

                  <PresentForm templateType = {userChoices.templateType} updateUserChoice = {updateUserChoice} userChoices = {userChoices} incompleteFields = {incompleteFields}/> </div>

                  : <PresentForm templateType = 'Honoring' updateStep = {updateStep} userChoices = {userChoices} getHonorState = {getHonorState}/> 

                  }


            </div>

                 {userChoices.templateType === 'Choose Template Type' ? null : 

                 <NextStepBtn userChoices = {userChoices} reportIncompleteFields = {reportIncompleteFields} goTotNextPreviousForm = {goTotNextPreviousForm} page = {formPage} updateStep ={updateStep}/> }
        
          </form>

        <Visualizer userChoices = {userChoices} formPage = {formPage} honorState = {honorState} />


      </div>
  
    </div>
  );
}

export default App;
