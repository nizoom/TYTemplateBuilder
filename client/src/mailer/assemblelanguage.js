import { sendEmailToServer } from "./postreqtoserver"
export function assembleLanguage(donorInfo, honorInfo){
    console.log(honorInfo.inHonorOrMemoryStr);

    const taxParagraph =  donorInfo.taxParagraph === 'Yes' ? `Please let this note serve as your receipt for a fully tax-deductible contribution of  ${donorInfo.donationAmount} 
    to Common Threads Project on ${donorInfo.donationDate}   No goods or services were provided in exchange for this contribution. Common Threads Project is an 
    exempt organization as described in Section 501(c)(3) of the Internal Revenue Code; EIN: 81-4212971.` : ''

    // Standard donor email info for newdonor and recurringdonor.handlbars 
    const standardDonorObj = {

        dearDonorStr : donorInfo.donorStr,

        donationAmount : donorInfo.donationAmount,

        donationDate : donorInfo.donationDate,

        taxParagraph : taxParagraph,

        email : donorInfo.recipient_email,

        subject: `Thank you ${donorInfo.donorStr} for your donation to Common Threads Project`,

        templateType : donorInfo.templateType === 'New donor' ? 'newdonor' : 'recurringdonor'

    }

    // Honorer TY info for honorer.handlebars

    const honorObj = () => {

       
        
        if(honorInfo.honorForm === 'Yes'){

            const honoreeFistName = honorInfo.honoreeName[0].donorFistName

            const honoreeName = `${honorInfo.honoreeName[0].donorFirstName} ${honorInfo.honoreeName[0].donorLastName}`

            console.log(honoreeName);

            const newDonorIntroSentence = 'Welcome to the Common Threads family! We are delighted that you have chosen to join our mission.'

            const recurringDonorIntroSentence = 'Thank you for continuing to be such a devoted supporter of Common Threads Project'

            const inMemoryOfSentence = `Because you have chosen to donate in memory of ${honoreeName}, we will send an acknowledgement to ${honorInfo.honoreeEmail}. What a meaningful tribute.`

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
        
                introSentence : introSentence,
        
                email : donorInfo.recipientEmail,

                subject: `Thank you ${donorInfo.donorStr} for your donation to Common Threads Project`,

                templateType : 'honorer'

                
            }
    
            return honorerObj
        } // else 

        return false 
    }
  

    // Honoree email info for honoree.handlebars 

    function getEmailSubjectStr(donorInfo){ // return the way the donor name should be appear in the email header to the honoree 
        let finalStr = ''

        let arrOfNames = donorInfo.donorNames 

        arrOfNames = Array.isArray(arrOfNames) ? arrOfNames : generateArrOfObjs(arrOfNames) //add objects to array where each object is its own element 

        // console.log(donorNamesArr);

        function generateArrOfObjs(donorNames){
            let arr = [];
            for(const property in donorNames){
                arr.push(
                  donorNames[property]
                )
            }
            return arr;
        }


        arrOfNames.forEach(nameObj => {

            const index = arrOfNames.indexOf(nameObj)


            if(index !== 0){
                finalStr += `and ${nameObj.donorFirstName} ${nameObj.donorLastName}`
                return
            }

            finalStr += `${nameObj.donorFirstName} ${nameObj.donorLastName}`
            return

        })
        return finalStr
    }

    const honoreeObj = {

        honorStatus : honorInfo.honorForm, 
        
        dearHonoreeStr : honorInfo.dearHonoreeStr,

        thoseGivingStr : honorInfo.thoseGivingStr,

        inHonorOrInMemoryStr : honorInfo.inHonorOrMemoryStr,

        gratefulTheyChoseToStr : honorInfo.thesePeopleDonatedStr,

        customMsg : honorInfo.customMsg,

        email : honorInfo.honoreeEmail,

        templateType : 'honoree',

        emailSubject : `${getEmailSubjectStr(donorInfo)} has dedicated a donation to you`
    }


    console.log('test')
    // console.log(donorInfo);
    console.log(honorInfo);

    // console.log(standardDonorObj);
    
    // console.log(honorObj());

    // console.log(honoreeObj);

    async function determineRelevantTemplates(){
        const honorerObj = honorObj()
        if(!honorerObj){
            // just send a [standardDonorObj] 
            const nodeMailerResult = await sendEmailToServer([standardDonorObj])
            console.log('sending standard email');

            return nodeMailerResult
            
        } else {
            
            // send [honoreeObj, honorObj]
            console.log('sending two emails');
            const nodeMailerResult = await sendEmailToServer([honoreeObj, honorerObj])

            return nodeMailerResult
            
        }   
    }

    determineRelevantTemplates()

}

