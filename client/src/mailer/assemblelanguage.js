export function assembleLanguage(donorInfo, honorInfo){

    const taxParagraph =  donorInfo.taxParagraph === 'Yes' ? `Please let this note serve as your receipt for a fully tax-deductible contribution of  ${donorInfo.donationAmount} 
    to Common Threads Project on ${donorInfo.donationDate}   No goods or services were provided in exchange for this contribution. Common Threads Project is an 
    exempt organization as described in Section 501(c)(3) of the Internal Revenue Code; EIN: 81-4212971.` : ''

    // Standard donor email info for newdonor and recurringdonor.handlbars 
    const standardDonorObj = {

        dearDonorStr : donorInfo.donorStr,

        donationAmount : donorInfo.donationAmount,

        donationDate : donorInfo.donationDate,

        taxParagraph : taxParagraph,

        email : donorInfo.recipient_email

        // emailSubject : 

    }

    // Honorer TY info for honorer.handlebars

    const honorObj = () => {
        
        if(honorInfo.honorForm === 'Yes'){

            const honoreeName = `${honorInfo.honoree_name[0].donorFistName} ${honorInfo.honoree_name[0].donorLastName}`

            const newDonorIntroSentence = 'Welcome to the Common Threads family! We are delighted that you have chosen to join our mission.'

            const recurringDonorIntroSentence = 'Thank you for continuing to be such a devoted supporter of Common Threads Project'

            const inMemoryOfSentence = `Because you have chosen to donate in memory of ${honoreeName}, we will send an acknowledgement to ${honorInfo.recipient_email}. What a meaningful tribute.`

            const honorSentence = `Because you have chosen to honor with your contribution ${honoreeName}, we will send your message in an acknowledgement to them.  What a lovely tribute!`

            //decide which sentences are applicable 

            const introSentence = donorInfo.templateType === 'New donor' ? newDonorIntroSentence : recurringDonorIntroSentence;

            const actionSentence = (honorInfo.honoringOrMemory === 'In honor of') ? honorSentence : inMemoryOfSentence;




            const honorerObj = {

                dearDonorStr : donorInfo.donorStr,
        
                donationAmount : donorInfo.donationAmount,
        
                donationDate : donorInfo.donationDate,
        
                taxParagraph : taxParagraph,
                                 
                actionSentence : actionSentence,
        
                introSentence : introSentence
        
                //donor email

                // emailSubject : 
                
            }
    
            return honorObj
        } // else 

        return false 
    }
  

    // Honoree email info for honoree.handlebars 

    const honoreeObj = {

        honorStatus : honorInfo.honorForm, 
        
        dearHonoreeStr : honorInfo.dearHonoreeStr,

        thoseGivingStr : honorInfo.thoseGivingStr,

        inHonorOrInMemoryStr : honorInfo.inHonorOrInMemoryStr,

        gratefulTheyChoseToStr : honorInfo.thesePeopleDonatedStr,

        customMsg : honorInfo.customMsg,

        email : honorInfo.honoreeEmail

        // emailSubject : 
    }


    console.log('test')

    console.log(donorInfo);
    
    console.log(honorInfo);

}

