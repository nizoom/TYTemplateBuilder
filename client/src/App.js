import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
// import StandardInputField from './components/inputfields/standardinputfield';
import PresentForm from './formfromtemplate/presentform';

import React, {useState} from 'react'

function App() {

  const [templateType, setTemplateType] = useState(null);

  const [stepStr, setStepStr] = useState('Step 1: Choose template type')

  function getTemplateDecision(type){

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

      <form className = 'main-form'>
        <div className = 'form-wrapper'>


              <label className = 'template-field-name'> Template Type: </label>

              <Dropdown  prefill = 'Choose template type' cssClass = 'long-dropdown' 
              options = {['New donor', 'Recurring donor', 'Honoree']} getDropdownDecision = {getTemplateDecision}/> 

              <PresentForm templateType = {templateType} changeToHonorForm = {changeToHonorForm}/>

          

        </div>
      </form>
    </div>
  );
}

export default App;
