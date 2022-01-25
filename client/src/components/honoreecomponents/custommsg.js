import React, {useState} from  "react";

const CustomMsg = (props) => {

    const [msgValue, setMsgValue] = useState('')

    function handleChange(e){
        const input = e.target.value;
        setMsgValue(input)

    }

    return (
        <div className="custom-msg-wrapper">

            <label> Custom Message :</label>
            <textarea onChange={handleChange} value = {msgValue}/>

        </div>
    )
}

export default CustomMsg