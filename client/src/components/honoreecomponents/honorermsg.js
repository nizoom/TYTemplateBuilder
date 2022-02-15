import React, {useState, useEffect} from 'react'
const HonorerMsg = () => {

    const [cssClass, setCssClass] = useState('')

    useEffect(() => {
        setCssClass('hidden')
    })
    

    return (
        <div className={cssClass}>
            <div className='warning-wrapper'>
                <div className='triangle'> 
                </div>
                     <p> Note this changes previous recurring/new donor TY email to an honorer email</p>
            </div>

        </div>
    )
}

export default HonorerMsg