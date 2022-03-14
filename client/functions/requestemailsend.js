const axios = require ('axios');

const url = 'https://pure-mesa-05243.herokuapp.com/submitemail';

exports.handler = async function (event, context) {

    console.log('fired');

    const emailObj = JSON.parse(event.body)

    console.log(emailObj);


    try{
        const responseObj = await axios.get(url, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
            },
            data: {
                "emailObj" : emailObj
            }
        })

        const resultBoolean = responseObj.data.result // true ? then pw was correct / else incorrect

        if(resultBoolean){

            return {
                statusCode : 200,
                body: JSON.stringify({message : 'Sent successfully'})
            }

        } else {
            return {
                statusCode : 502,
                body: JSON.stringify({message : 'Email failed'})
            }
          
        }

    } catch (error) {
        console.log(error);
    }

}