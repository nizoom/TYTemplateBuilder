export async function attemptLogin(pwAttempt){

    console.log(pwAttempt);

    const response = await fetch('http://localhost:3002/login' , {
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

