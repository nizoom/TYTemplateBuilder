import moment from 'moment'

export function donationFormValidation(state){
    //do the below for both state types (honor and donation)
    console.log(state)
   
    // create shallow copy of state 
    let shallowCopyOfState = {...state}

    let invalidFields = [];

    // delete properties that are uneeded 

    delete shallowCopyOfState.taxParagraph
    delete shallowCopyOfState.templateType

    // donation amount must be greater than zero 
    if(shallowCopyOfState.donationAmount < 1){
        invalidFields.push('donationAmount')
    }

    // donation date must be in the right format and be btw 1990 and 2025 (arbitrary years)

    const momentifiedDate = moment(shallowCopyOfState.donationDate, "YYYY-MM-DD")

    if(moment(momentifiedDate._i, "YYYY-MM-DD").isValid()){
        if(moment(momentifiedDate._i).isBefore('1990-01-01') && moment(momentifiedDate._i).isAfter('2025-01-01')){
            invalidFields.push('donationDate')
        }
    }

    // email must be valid email format with @ and .com/net research

    function validateEmail(email){
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
    }


    if(!validateEmail(shallowCopyOfState.recipientEmail)){
        invalidFields.push('recipientEmail')
    }

  
   //get array of name validation and see if any elements are invalid 
   const testedNames = validateDonorNames(shallowCopyOfState.donorNames)

   const invalidNameTrigger = testedNames.find(testedName => typeof(testedName) === 'object');

   //a return of undefined from the find method means that the element being filtered for was not found

   if(invalidNameTrigger !== undefined ) { invalidFields.push(testedNames) };

   function validateDonorNames(namesArr){
         // for names both first name and last name must be filled out for the name to be valid
        let namesValidityTracker = []
        if(namesArr.length < 1){
            namesValidityTracker[0].donorFirstName = false
            namesValidityTracker[0].donorLastName = false
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


 

    // return a list of the fields that have issues to the files where the root states are held, then have them display valid entry required or a red X tool tip

    // if arr is empty then green light to go to next page / submit  


  

}


export function honorFormValidation(state){

}
