import moment from 'moment'

export function donationFormValidation(state){
    //do the below for both state types (honor and donation)
   
    // create shallow copy of state 
    let shallowCopyOfState = {...state}

    let validityTracker = [];
    
    // delete properties that are uneeded 

    delete shallowCopyOfState.taxParagraph
    delete shallowCopyOfState.templateType

    // donation amount must be greater than zero 
    if(shallowCopyOfState.donationAmount < 1){
        validityTracker.push({donationAmount : 'invalid'})
    } else {
        validityTracker.push({donationAmount : 'valid'})
    }

    // donation date must be in the right format and be btw 1990 and 2025 (arbitrary years)

    const momentifiedDate = moment(shallowCopyOfState.donationDate, "YYYY-MM-DD")

    if(moment(momentifiedDate._i, "YYYY-MM-DD").isValid()){

        if(moment(momentifiedDate._i).isBefore('1990-01-01') || moment(momentifiedDate._i).isAfter('2025-01-01')){
            validityTracker.push({donationDate : 'invalid'})
            
        } else {
            validityTracker.push({donationDate : 'valid'})
   
        }
    } else { // if left blank
        validityTracker.push({donationDate : 'invalid'})
    }

    // email must be valid email format with @ and .com/net research



    if(!validateEmail(shallowCopyOfState.recipientEmail)){
        validityTracker.push({recipientEmail : 'invalid'})
    } else {
        validityTracker.push({recipientEmail : 'valid'})
    }   

   const donorNames = Array.isArray(shallowCopyOfState.donorNames) ? shallowCopyOfState.donorNames :  Object.values(shallowCopyOfState.donorNames)
   //get array of name validation and see if any elements are invalid 
   const testedNames = validateDonorNames(donorNames)

   const invalidNameTrigger = testedNames.find(testedName => typeof(testedName) === 'object');

   //a return of undefined from the find method means that the element being filtered for was not found

   if(invalidNameTrigger !== undefined ) { validityTracker.push({namesStatus : testedNames}) } else { validityTracker.push({namesStatus : 'valid'})  };

   function validateDonorNames(namesArr){

         // for names both first name and last name must be filled out for the name to be valid
        let namesValidityTracker = []
        if(namesArr.length < 1){
            namesValidityTracker.push({donorFirstName : false}, {donorLastName : false})
        } else {
            namesArr.forEach(nameObj => {
                const index = namesArr.indexOf(nameObj)
                 //check if each property is filled in and not blank
                
                 //if blank then mark the element at that index of namesValidityTracker as problematic 
                
                
                // if both are true then push true 
                const checkFirstName = checkIfBlank(nameObj.donorFirstName)
                
                const checkLastName = checkIfBlank(nameObj.donorLastName)
                
                if(checkFirstName && checkLastName){
                  
                  namesValidityTracker.push(true) 
                  
                } else {
                  
                  // if one is not true then create the object w the status for both properties 
                  
                  namesValidityTracker.push({donorFirstName : checkFirstName, donorLastName : checkLastName})
                }
                
            })
        }
      
      return namesValidityTracker
    
    }
    
    function checkIfBlank (nameProperty){
        return( nameProperty === undefined || nameProperty === '' ? false : true )
    }



    // let x = true;
    


    const validityResults = determineResultsOfValidityTracker(validityTracker) 

    //if the values of all objects is valid then return signal to go to next page  - else return object reporting invalid statuses
    if(validityResults === undefined){
        return 'go to next page'
    } 
    //if any values are invalid then return validity tracker 

    return validityTracker

}

function validateEmail(email){
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
}

function determineResultsOfValidityTracker(validityTracker){

    //checks to see if any validity objs  in the validity tracker are invalid 
    const validityTrackerValues = validityTracker.map(validityObj => {
        const value = Object.values(validityObj)[0];
        return value;
    })

    const result = validityTrackerValues.find(element => element !== 'valid')
    
    return result
}

export function honorFormValidation(state){
   
   
    // create shallow copy of state 
    let shallowCopyOfState = {...state}

    delete shallowCopyOfState.customMsg;
    delete shallowCopyOfState.honorForm;

    // console.log(shallowCopyOfState)

    let validityTracker = [];


    //email validation 

  
    
    if(!validateEmail(shallowCopyOfState.honoreeEmail)){
        validityTracker.push({honoreeEmail : 'invalid'})
    } else {
        validityTracker.push({honoreeEmail : 'valid'})
    }   

    //in honor or memeory choice validation 

    if(shallowCopyOfState.honoringOrMemory === "in Honor or in Memory"){ //hasn't been chosen yet
        validityTracker.push({honoringOrMemory : 'invalid'})
    } else {
        validityTracker.push({honoringOrMemory : 'valid'})
    }

    //recipient name validation
    const recipientNameObj = shallowCopyOfState.recipientName[0];

    if(recipientNameObj.donorFirstName === '' || recipientNameObj.donorLastName === ''){
        //if either are blank then return an object indicating the invalid name fields
      
        const recipientFirstNameStatus = recipientNameObj.donorFirstName === '' ? false : true ;
        const recipientLastNameStatus = recipientNameObj.donorLastName === '' ? false : true ;
        validityTracker.push({recipient : {
            recipientFirstName : recipientFirstNameStatus,
            recipientLastName : recipientLastNameStatus
        }})
    } else {
        validityTracker.push({recipientName : 'valid'})
    }

    //honoree name validation 

    if(shallowCopyOfState.honoreeName.length < 1){
        validityTracker.push({ honoreeName : 'invalid '})
    } else {
        const honoreeNameObj = shallowCopyOfState.honoreeName[0]
        if(honoreeNameObj.donorFirstName === '' || honoreeNameObj.donorLastName === ''){
            //if either are blank then return an object indicating the invalid name fields
            const honoreeFirstNameStatus = honoreeNameObj.donorFirstName === '' ? false : true ;
            const honoreeLastNameStatus = honoreeFirstNameStatus === true ? false : true ;
            validityTracker.push({ honoreeName : {
                honoreeFirstName : honoreeFirstNameStatus,
                honoreeLastName : honoreeLastNameStatus
            }})
        } else {
            validityTracker.push({honoreeName : 'valid'})
        }
    }

    const validityResults = determineResultsOfValidityTracker(validityTracker) 

    //if the values of all objects is valid then return signal to go to next page  - else return object reporting invalid statuses
    if(validityResults === undefined){
        return 'submit'
    } 
    //if any values are invalid then return validity tracker 

    // console.log(validityTracker)

    return validityTracker

     
    
}


