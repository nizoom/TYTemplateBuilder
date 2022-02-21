export async function sendEmailToServer(arrayOfEmailObj){
    console.log('sending');
   
    console.log(arrayOfEmailObj);
    
    const response = await fetch("http://localhost:3002/send" , {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(arrayOfEmailObj), // ONE EMAIL ELEMENT IN ARRAY 
    }) 
    .then((res) => res.json())
}