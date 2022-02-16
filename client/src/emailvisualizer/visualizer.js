import React from 'react';
import './visualizer.css'
import PresentPreview from './presentpreview';
import { useState } from 'react';
const Visualizer = (props) => {


    
    return (
        <section className='msg-wrapper'>
            <div className='inner-content'>   
                <PresentPreview userChoices = {props.userChoices} formPage = {props.formPage} honorState = {props.honorState} updateUserChoice = {props.updateUserChoice}/>
            </div>
        </section>
    )
}

export default Visualizer