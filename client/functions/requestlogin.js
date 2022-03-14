const axios = require('axios')

// const moment = require('moment')

const url = 'https://pure-mesa-05243.herokuapp.com/login'

exports.handler = async function (event, context) {


        const pwGuess = JSON.parse(event.body).attempt
        console.log(pwGuess);

        try{
            const responseObj = await axios.get(url, {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                },
                data: {
                    "pwAttempt" : pwGuess
                }
            })

            const resultBoolean = responseObj.data.result // true ? then pw was correct / else incorrect

            if(resultBoolean){

                return {
                    statusCode : 200,
                    body: JSON.stringify({message : 'Login success'})
                }
    
            } else {
                return {
                    statusCode : 401,
                    body: JSON.stringify({message : 'Login failed'})
                }
              
            }

        } catch (error) {
            console.log(error);
        }

   

}