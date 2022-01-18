import React from 'react';
import './visualizer.css'
import PresentPreview from './presentpreview';
const Visualizer = (props) => {

    return (
        <section className='msg-wrapper'>
            <div className='inner-content'>   
                <PresentPreview userChoices = {props.userChoices}/>

            </div>
        </section>
    )
}

export default Visualizer