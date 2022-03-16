export async function sendEmailToServer(arrayOfEmailObj){
    console.log('sending');
   
    // console.log(arrayOfEmailObj);

    const response = await fetch("/.netlify/functions/requestemailsend" , {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(arrayOfEmailObj), // ONE EMAIL ELEMENT IN ARRAY 
    }) 
    .then((res) => res.json())
       .then(async (res) => {
            console.log(res);
            return res
            
        })
        
    console.log(response);

    if(response.results){
        return true
    } else {
        return false
    }

}

