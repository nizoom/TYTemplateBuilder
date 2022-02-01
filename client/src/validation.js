function donationFormValidation(state){
    //do the below for both state types (honor and donation)

    // create shallow copy of state 

    // delete properties that are uneeded 

        // donation amount must be greater than zero 

        // donation date must be in the right format and be after 1990

        // email must be valid email format with @ and .com/net research

        // for names both first name and last name must be filled out

    // return a list of the fields that have issues to the files where the root states are held, then have them display valid entry required or a red X tool tip

    // if arr is empty then green light to go to next page / submit  


     const temporaryState = {
        // maybe add template type to this object rather than having a seperate hook for that 
          templateType : 'Choose Template Type',
          donationAmount: 0,
          donationDate : 'mm-dd-yyyy',
          recipientEmail : '',
          taxParagraph : 'Yes',
          donorNames : [] //arr of objects with firstName and lastName properties for each element    
      }

}

export default donationFormValidation;

function honorFormValidation(state){

}