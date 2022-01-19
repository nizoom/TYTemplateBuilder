import React, {useRef, useEffect} from 'react';
import ThisIsWhatYouMakePossible from './thisiswhatyoumakepossible';



const IntroSentence = (props) => {
    
    const templateType = props.emailData.templateType

    const emailData = props.emailData

    return(
        <span>
        {   templateType === 'New donor' ?
            <span> Welcome to the Common Threads family! We are delighted you have chosen to join our 
            mission and appreciate your generous contribution. Your gift provides hope for survivors of sexual violence. </span> : 
            
            <span> Thank you for continuing to be such a devoted supporter of Common Threads Project. 
            With a gift of <span className = 'dynamic-text'> ${emailData.donationAmount} </span>on <span className = 'dynamic-text'> {emailData.donationDate} </span> you’re providing hope for survivors of sexual violence. </span> 
            
            }
        </span>
    )
}

const EmailPreview = (props) => {

    const emailData = props.emailData

    return (
        <div className='preview-content'> 
            <h4 className='dear'> Dear <span className='dynamic-text'> {emailData.donorFirstName.length > 0 ? emailData.donorFirstName : 'Donor'}</span>, </h4>

            <p className='main-copy'> <IntroSentence emailData = {emailData}/>
                    Because of you, women and girls who are most at risk during this time of crisis will have access to transformative 
                    trauma healing. They can become part of our Common Threads Project circles and build camaraderie with other women who share their experience.</p>

            <ThisIsWhatYouMakePossible/>
            <p className='main-copy'> The women and girls of Common Threads Project appreciate your belief in the possibility of healing. </p>

            <p className='main-copy tax-paragraph'> Please let this note serve as your receipt for a fully tax-deductible contribution of  <span className='dynamic-text'> ${emailData.donationAmount}  </span>
            to Common Threads Project on <span className='dynamic-text'> {emailData.donationDate}  </span>. No goods or services were provided in exchange for this contribution. Common Threads Project is an 
            exempt organization as described in Section 501(c)(3) of the Internal Revenue Code; EIN: 81-4212971. </p>

            <p className='main-copy'> Signature / Address</p>
        </div>
    )
}

export default EmailPreview;


