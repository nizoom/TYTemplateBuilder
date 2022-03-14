export async function sendEmailToServer(arrayOfEmailObj){
    console.log('sending');
   
    // console.log(arrayOfEmailObj);

    const response = await fetch("/.netlify/functions/requestlogin" , {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(arrayOfEmailObj), // ONE EMAIL ELEMENT IN ARRAY 
    }) 
    .then((res) => res.json())
    .then(async (res) => {
        const resData = await res;
        const messageStatus = declareSendingResults(resData)
        return messageStatus;
      })
    
    // console.log(response);

    function declareSendingResults(resultsObj){
        console.log(resultsObj);

        const arrOfResults = resultsObj.results

        let messageStatus = true

        arrOfResults.forEach(result => {
            if(!result){
                messageStatus = false 
            }
        })
        console.log(messageStatus);
        return messageStatus
        
    }

    return response;
}

