import React from 'react';
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
            With a gift of <span className = 'dynamic-text'> ${emailData.donationAmount} </span> on <span className = 'dynamic-text'> {emailData.donationDate} </span> you’re providing hope for survivors of sexual violence. </span> 
            
            }
        </span>
    )
}

const DearDonorStr = (props) => {

    const emailData = props.emailData

    function checkForUndefinedFirstName(firstName){
        return (firstName === undefined ? 'FIRST NAME REQUIRED' : firstName)
    }

    const determineNameStr = () => { // this function returns the str of names to be grammatically correct after 'Dear' in case the user has added more than 1 donor

        const allNames = emailData.donorNames;

        const firstNames = allNames.map(obj => {
               const firstName = checkForUndefinedFirstName( obj.donorFirstName );
               return firstName
        })
        //1 name only

        // console.log(firstNames)

        if(firstNames.length === 1){
            // console.log('1 name')
            const firstName = firstNames[0]

            return `${firstName}`
        }

        // 2 names only

        if(firstNames.length === 2) {
            //  console.log('2 names')
            return `${firstNames[0]} and ${firstNames[1]}`

        } else {

        //more than 2 names
            // console.log('more than 2 names')

            let finalStr = ''

            const numberOfNames = firstNames.length 
            
            firstNames.forEach((name, index) => {
            
                if(index !== numberOfNames - 1){
                    finalStr += `${name}, `
                } else {
                    finalStr += `and ${name}`
                }
            
           
  
            })

            return finalStr;

        }

    }

    return (
        <span>

        {  emailData.donorNames.length > 0 ?
            <span className='dynamic-text' > {determineNameStr()}</span> :
            <span className='dynamic-text' > Donor </span> 
            }
        </span>
    )


}




const EmailPreview = (props) => {

    const emailData = props.emailData
    
    return (
        <div className='preview-content'> 
            <h4 className='dear'> Dear <DearDonorStr emailData = {props.emailData}/>, </h4>

            <p className='main-copy'> <IntroSentence emailData = {emailData}/>
                    Because of you, women and girls who are most at risk during this time of crisis will have access to transformative 
                    trauma healing. They can become part of our Common Threads Project circles and build camaraderie with other women who share their experience.</p>

            <ThisIsWhatYouMakePossible/>
            <p className='main-copy'> The women and girls of Common Threads Project appreciate your belief in the possibility of healing. </p>

            {emailData.taxParagraph === 'Yes' ? <p className='main-copy tax-paragraph'> Please let this note serve as your receipt for a fully tax-deductible contribution of  <span className='dynamic-text'> ${emailData.donationAmount}  </span>
            to Common Threads Project on <span className='dynamic-text'> {emailData.donationDate}  </span>. No goods or services were provided in exchange for this contribution. Common Threads Project is an 
            exempt organization as described in Section 501(c)(3) of the Internal Revenue Code; EIN: 81-4212971. </p> : null}

            <p className='main-copy'> Signature / Address</p>
        </div>
    )
}

export default EmailPreview;


