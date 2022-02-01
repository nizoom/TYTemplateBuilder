import React from 'react';

const HonorEmailPreview = (props) => {

    const emailData = props.honorState 

    const determineRecipientNameState = (emailData) => { // accounts for how props are looking as they go through the render cycle
        // console.log(emailData)
      if(emailData !== undefined){

        const recipientName = emailData.recipientName
        // console.log('fired')
        if(recipientName.length > 0){
            if(recipientName[0].donorFirstName !== ''){
                return recipientName[0].donorFirstName;
            }
            return 'Recipient'
        } 

        return 'Recipient'

      }
       
    }

    const donorNames = props.donorState.donorNames

    

    const determineDonorNameState = (donorNames) => {
        if(donorNames.length < 2){
            return `${donorNames[0].donorFirstName}  ${donorNames[0].donorLastName}`
        }

        let namesStr = ''

        donorNames.forEach((nameObj, index) => {
            if(index !== donorNames.length - 1){ //if this isn't the last person in the list then add the 'and'
                namesStr += `${nameObj.donorFirstName} ${nameObj.donorLastName} and `
            } else {
                namesStr += `${nameObj.donorFirstName} ${nameObj.donorLastName}`
            }
            
        })

        return namesStr;
       
    }

    const determineMemoryOrHonorStr = (emailData) => {
        // console.log(emailData)
        const strState = emailData.honoringOrMemory;
        const honoree = emailData.honoreeName.length > 0 ? emailData.honoreeName[0].donorFirstName : 'honoree'
        const recipient = determineRecipientNameState(emailData);

  
        if(strState !== 'in Honor or in Memory'){
            if(strState === 'In memory of'){
                console.log('memory')
                return `memory of ${honoree}`
            }
            if(strState === 'In honor of'){
                console.log('honor')
                if (honoree === recipient ){ // most likely scenario
                   return 'honor you in this way'
                } else {
                    return `honor of ${honoree}.`
                }
            }     
           
        } else {
            return 'in honor / in memory of honoree'
        }
    }

    const determineAdressingStyle = (emailData) => {
        const honoree = emailData.honoreeName.length > 0 ? emailData.honoreeName[0].donorFirstName : 'honoree'
        const recipient = determineRecipientNameState(emailData);
        
        // console.log(honoree)
        // console.log(recipient)

        if(honoree !== 'honoree' || recipient !== 'Recipient'){ //default state
            const sameHonoreeAndRecipient = honoree === recipient ? true : false 
            if(honoree === recipient){
                return 'honor you'
            } if (honoree !== 'honoree' && recipient !== 'Recipient' && !sameHonoreeAndRecipient){
                return 'honor them'
            }
            
        } 
            // console.log('default')
            return 'honor you / them '
    }

    return (
        <div>
        { emailData.honorForm === "Yes" ? 
        <div className='preview-content'>

        
        <div className='storycloth-wrapper'>
                <p className='storycloth'> Story Cloth Photo </p>
            </div>
             <h4 className='dear'> Dear  <span className='dynamic-text'> {determineRecipientNameState(emailData)} </span></h4>

          

             <p className='main-copy'>
             This note is to let you know that <span className='dynamic-text'> {determineDonorNameState(donorNames)} </span> has made a 
             very generous donation to Common Threads Project in 
             <span className='dynamic-text'> {determineMemoryOrHonorStr(emailData)} </span>. 
             We are deeply grateful that they chose to <span className='dynamic-text'> {determineAdressingStyle(emailData)}</span>in this way. 
             
             We join <span className='dynamic-text'> {determineDonorNameState(donorNames)} </span> in wishing you all the best.
             </p>


             <p className='main-copy'><em> Thank you for all your great work!</em> </p>

             <p className='main-copy'> {emailData.customMsg === '' ? <span className='dynamic-text'> Custom message </span> : <em>{emailData.customMsg} </em>}</p>

             <p className='main-copy'> Signature / Address</p> 
             
             
        </div> : null } </div>
    )
}

export default HonorEmailPreview