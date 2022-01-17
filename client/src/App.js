import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
import Visualizer from './emailvisualizer/visualizer';
import PresentForm from './formfromtemplate/presentform';

import React, {useState} from 'react'

function App() {

  const [templateType, setTemplateType] = useState(null);

  // track all user inputs on the form

  const [userChoices, setUserChoices] = useState({
    // maybe add template type to this object rather than having a seperate hook for that 
      donorName : '',// if more than one ( + btn was used ) hold the value of this property in an array 
      donationAmount: '',
      donationDate : '',
      repientEmail : '',
      taxParagaphe : true
  })

  function updateUserChoice(choice){
    console.log(choice)
  }


  const [stepStr, setStepStr] = useState('Step 1: Choose template type')

  function getTemplateDecision(type){
    //passes template type decision to Present Form component as a prop
    setTemplateType(type)
    setStepStr('Step 2: fill out fields')
  }

  function changeToHonorForm(){
    console.log('changing to honor form')
    setTemplateType('honoring')
    // setStepStr('Step 2.5: set up honoree email')
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
            <div className = 'form-wrapper'>


                  <label className = 'template-field-name'> Template Type: </label>

                  <Dropdown  prefill = 'Choose template type' cssClass = 'long-dropdown' 
                  options = {['New donor', 'Recurring donor', 'Honoree']} getDropdownDecision = {getTemplateDecision}/> 

                  <PresentForm templateType = {templateType} changeToHonorForm = {changeToHonorForm} updateUserChoice = {updateUserChoice}/>



            </div>

        
          </form>

        <Visualizer visualizerType = {templateType}/>

      </div>
  
    </div>
  );
}

export default App;
