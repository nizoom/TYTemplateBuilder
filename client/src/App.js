import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
// import StandardInputField from './components/inputfields/standardinputfield';
import PresentForm from './formfromtemplate/presentform';

import React, {useState} from 'react'

function App() {

  const [templateType, setTemplateType] = useState(null);

  function getTemplateDecision(type){

    setTemplateType(type)
  }
 

  return (

    <div className="App">
      <header className="App-header">
        <h1 className = 'app-title'> Custom Email Template Builder </h1>
        <h2 className = 'sub-title'> Custom thank you emails made easy </h2>
      </header>

      <h3 className='step'> Step 1: Choose template type </h3>

      <form className = 'main-form'>
        <div className = 'form-wrapper'>


              <label className = 'template-field-name'> Template Type: </label>

              <Dropdown  prefill = 'Choose template type' cssClass = 'long-dropdown' 
              options = {['New donor', 'Recurring donor', 'Honoree']} getTemplateDecision = {getTemplateDecision}/> 

              <PresentForm templateType = {templateType}/>
{/* 
              <label className='donor-field-name'> Donor Name: </label>


              <StandardInputField cssClass = 'short-input-field first-name' prefill = 'First name' />

              <StandardInputField cssClass = 'short-input-field last-name' prefill = 'Last name' /> */}


          

        </div>
      </form>
    </div>
  );
}

export default App;
