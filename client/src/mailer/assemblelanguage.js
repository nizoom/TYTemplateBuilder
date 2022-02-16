export function assembleLanguage(donorInfo, honorInfo){

    // Standard donor email info for newdonor and recurringdonor.handlbars 
    const standardDonorObj = {
        //Dear str 

        //donation amount

        //donation date

        //tax paragraph 

    }

    // Honorer TY info for honorer.handlebars

    const honorerObj = {
        //Dear str 

        //donation amount

        //donation date

        //tax paragraph 

        // introSentence
                         
        // actionSentence

        
    }

    // Honoree email info for honoree.handlebars 

    const honoreeObj = {

        // honoreeName

        // honorerNames Str from visualizer 

        // acknowledgementPhrase

        // custom Msg
    }


    console.log('test')

    console.log(donorInfo);
    
    console.log(honorInfo);

}

