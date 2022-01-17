import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
import Visualizer from './emailvisualizer/visualizer';
import PresentForm from './formfromtemplate/presentform';

import React, {useState, useEffect} from 'react'

function App() {

  const [templateType, setTemplateType] = useState(null);

  // track all user inputs on the form

  const [userChoices, setUserChoices] = useState({
    // maybe add template type to this object rather than having a seperate hook for that 
      templateType : null,
      donorFirstName : '',// if more than one ( + btn was used ) hold the value of this property in an array \
      donorLastName : '',
      donationAmount: '',
      donationDate : '',
      recipientEmail : '',
      taxParagaphe : true
  })

  function updateUserChoice(choice){
    // console.log(Object.keys(choice))
    const [keyName] = Object.keys(choice);
    const [valueName] = Object.values(choice)
    console.log(`${keyName} : ${valueName}`)
    setUserChoices({
      ...userChoices,
      [keyName] : valueName
    })

    // console.log(userChoices)
  } 

  useEffect(() => {
    console.log(userChoices.recipientEmail)
  })


  const [stepStr, setStepStr] = useState('Step 1: Choose template type')

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
                  options = {['New donor', 'Recurring donor', 'Honoree']} updateUserChoice = {updateUserChoice}/> 

                  <PresentForm templateType = {userChoices.templateType} changeToHonorForm = {changeToHonorForm} updateUserChoice = {updateUserChoice}/>



            </div>

        
          </form>

        <Visualizer visualizerType = {userChoices.templateType}/>

      </div>
  
    </div>
  );
}

export default App;
