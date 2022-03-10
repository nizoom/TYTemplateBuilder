export async function attemptLogin(pwAttempt){

    console.log(pwAttempt);

    const response = await fetch('https://pure-mesa-05243.herokuapp.com/login' , { // CHANGE TO NEW ENDPOINT 
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify({attempt : pwAttempt}), // ONE EMAIL ELEMENT IN ARRAY 
    
    }).then((res) => res.json())
        .then(async (res) => {
          
            return res
            
        })

    return response
        
}

