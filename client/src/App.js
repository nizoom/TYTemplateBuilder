import './App.css';
import Dropdown from './components/dropdowns/dropdowns';
import Visualizer from './emailvisualizer/visualizer';
import PresentForm from './formfromtemplate/presentform';
import NextStepBtn from './components/nextstepbtn/nextstepbtn'
import MsgStatusPopup from './components/statuspopup/statuspopup';
import LoginPage from './login/login';


import React, {useState} from 'react'

function App() {

  // console.log(process.env.REACT_APP_PW)
  // track all user inputs on the form

  const [userChoices, setUserChoices] = useState({
    // maybe add template type to this object rather than having a seperate hook for that 
      templateType : 'Choose Template Type',
      donationAmount: 0,
      donationDate : 'mm-dd-yyyy',
      recipientEmail : '',
      taxParagraph : 'Yes',
      donorNames : [], //arr of objects with firstName and lastName properties for each element    
      donorStr : ''
  })


  function updateUserChoice(choice){
    // console.log(choice)
    
    // console.log(Object.keys(choice))
    const [keyName] = Object.keys(choice);
    const [valueName] = Object.values(choice)
    // console.log(keyName)
    // console.log(valueName);
      setUserChoices({
        ...userChoices,
        [keyName] : valueName
      })
    // }


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

  const [incompleteFields, setIncompleteFields] = useState(false)

  function reportIncompleteFields(fields){
    // console.log(fields);
    setIncompleteFields(fields)
  } 

  const [recentPageChange, setRecentPageChange] = useState(false)

  function updatePageChangeState(){
    setRecentPageChange(false)
  }

  const [formPage, setFormPage] = useState(1)

  function goTotNextPreviousForm (direction){

    // direction is + 1 or - 1
    if(direction > 0) {
      setFormPage(formPage + 1)
      setRecentPageChange(true)
     
    } else {
      setFormPage(formPage  - 1)
      setRecentPageChange(true)
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

  const [honoreeVizStrs, setHonoreeVizStrs] = useState()
  function getHonoreeVizStrs(obj){ // this function gets the strings needed for the honoree email from the visualizer to pass eventually to assembleLanguage file
  
    setHonoreeVizStrs(obj)
  }

  const [resultMessage, setResultMessage] = useState(true)

  function getMsgStatustToRoot(bool){
    bool ? setResultMessage(true) : setResultMessage(false)
  }

  function closePopUp(){
    setResultMessage(null)
  }

  const authorized = false; // call function to assess authorization 

  return (

    <div className="App">{
      authorized ? <div> 
      { resultMessage !== null ? <MsgStatusPopup status = {resultMessage} closePopUp = {closePopUp}/> : null }

      <header className="App-header">
        <h1 className = 'app-title'> Custom Email Template Builder </h1>
        <h2 className = 'sub-title'> Custom thank you emails made easy </h2>
      </header>

      <div className={resultMessage !== null?  'opaqueduringpopup' : ''}> 

      <h3 className='step'> {stepStr} </h3>

      <div className='form-visualizer-grid'>

          <form className = 'main-form'>
            <div>


                 { formPage === 1 ? 
             
                  <div className= 'form-wrapper'> <label className = 'template-field-name'> Template Type: </label>

                  <Dropdown  prefill = {userChoices.templateType} cssClass = 'long-dropdown' 
                  options = {['New donor', 'Recurring donor']} updateUserChoice = {updateUserChoice} updateStep = {updateStep} updateKey = 'templateType'/> 

                  <PresentForm templateType = {userChoices.templateType} updateUserChoice = {updateUserChoice} userChoices = {userChoices} incompleteFields = {incompleteFields} recentPageChange = {recentPageChange}
                  updatePageChangeState = {updatePageChangeState}
                  /> </div>

                  : <PresentForm templateType = 'Honoring' updateStep = {updateStep} userChoices = {userChoices} getHonorState = {getHonorState} honoreeVizStrs = {honoreeVizStrs}
                    getMsgStatustToRoot={getMsgStatustToRoot}
                  /> 

                  }


            </div>

                 {userChoices.templateType === 'Choose Template Type' ? null : 

                 <NextStepBtn userChoices = {userChoices} reportIncompleteFields = {reportIncompleteFields} goTotNextPreviousForm = {goTotNextPreviousForm} page = {formPage} updateStep ={updateStep}/> }
        
          </form>

        <Visualizer userChoices = {userChoices} formPage = {formPage} honorState = {honorState} updateUserChoice = {updateUserChoice} getHonoreeVizStrs ={getHonoreeVizStrs}/>


      </div>
      </div>
      </div> : 
        <LoginPage/>
      }
  
    </div>
  );
}

export default App;
