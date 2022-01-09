import './App.css';
import Dropdown from './components/dropdowns/dropdowns';

import React, {useState} from 'react'

function App() {

 

  return (

    <div className="App">
      <header className="App-header">
        <h1 className = 'app-title'> Custom Email Template Builder </h1>
        <h2 className = 'sub-title'> Custom thank you emails made easy </h2>
      </header>

      <form className = 'main-form'>
        <div className = 'form-wrapper'>


              <label className = 'template-field-name'> Template Type: </label>

              <Dropdown  prefill = 'Choose template type' cssClass = 'long-dropdown' 
              options = {['New donor', 'Recurring donor', 'Honoree']} /> 

              <label className='donor-field-name'> Donor Name: </label>

       

        </div>
      </form>
    </div>
  );
}

export default App;
