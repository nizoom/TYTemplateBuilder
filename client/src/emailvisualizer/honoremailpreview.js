import React, { useEffect } from "react";

const HonorEmailPreview = (props) => {
  const emailData = props.honorState;

  const determineRecipientNameState = (emailData) => {
    // accounts for how props are looking as they go through the render cycle
    // console.log(emailData)
    if (emailData !== undefined && emailData.recipientName !== undefined) {
      const recipientName = emailData.recipientName;
      // console.log('fired')
      if (recipientName.length > 0) {
        if (recipientName[0].donorFirstName !== "") {
          return recipientName[0].donorFirstName;
        }
        return "Recipient";
      }

      return "Recipient";
    }
  };

  const donorNames = props.donorState.donorNames;

  const determineDonorNameState = (donorNames) => {
    if (donorNames.length < 2) {
      return `${donorNames[0].donorFirstName}  ${donorNames[0].donorLastName}`;
    }

    let namesStr = "";
    // BUG OCCURS LINE 37 WHERE DONORNAMES IS NOT AN ARR? S
    const donorNamesArr = Array.isArray(donorNames)
      ? donorNames
      : generateArrOfObjs(donorNames); //add objects to array where each object is its own element

    // console.log(donorNamesArr);

    function generateArrOfObjs(donorNames) {
      let arr = [];
      for (const property in donorNames) {
        arr.push(donorNames[property]);
      }

      return arr;
    }

    donorNamesArr.forEach((nameObj, index) => {
      if (index !== donorNames.length - 1) {
        //if this isn't the last person in the list then add the 'and'
        namesStr += `${nameObj.donorFirstName} ${nameObj.donorLastName} and `;
      } else {
        namesStr += `${nameObj.donorFirstName} ${nameObj.donorLastName}`;
      }
    });

    return namesStr;

    // return 'Nissim'
  };

  const determineMemoryOrHonorStr = (emailData) => {
    // console.log(emailData)
    if (emailData.honoreeName !== undefined) {
      const strState = emailData.honoringOrMemory;
      const honoree =
        emailData.honoreeName.length > 0
          ? emailData.honoreeName[0].donorFirstName
          : "honoree";
      const recipient = determineRecipientNameState(emailData);

      if (strState !== "in Honor or in Memory") {
        if (strState === "In memory of") {
          console.log("memory");
          return `memory of ${honoree}`;
        }
        if (strState === "In honor of") {
          if (honoree === recipient) {
            // most likely scenario
            return "in your honor";
          } else {
            return `honor of ${honoree}.`;
          }
        }
      } else {
        return "in honor / in memory of honoree";
      }
    } else {
      return "in honor / in memory of honoree";
    }
  };

  const determineAdressingStyle = (emailData) => {
    if (emailData.honoreeName !== undefined) {
      const honoree =
        emailData.honoreeName.length > 0
          ? emailData.honoreeName[0].donorFirstName
          : "honoree";
      const recipient = determineRecipientNameState(emailData);

      // console.log(honoree)
      // console.log(recipient)

      if (honoree !== "honoree" || recipient !== "Recipient") {
        //default state
        const sameHonoreeAndRecipient = honoree === recipient ? true : false;

        if (honoree === recipient) {
          return "honor you";
        }
        if (
          honoree !== "honoree" &&
          recipient !== "Recipient" &&
          !sameHonoreeAndRecipient
        ) {
          return "honor them";
        }
      }
      // console.log('default')
      return "honor you / them ";
    }
    return "honor you / them ";
  };

  const dearHonoreeStr = determineRecipientNameState(emailData);
  const thesePeopleDonatedStr = determineAdressingStyle(emailData);
  const inHonorOrMemoryStr = determineMemoryOrHonorStr(emailData);
  const thoseGivingStr = determineDonorNameState(donorNames);

  useEffect(() => {
    props.getHonoreeVizStrs({
      dearHonoreeStr: dearHonoreeStr,

      thesePeopleDonatedStr: thesePeopleDonatedStr,

      inHonorOrMemoryStr: inHonorOrMemoryStr,

      thoseGivingStr: thoseGivingStr,
    });
  }, [
    dearHonoreeStr,
    thesePeopleDonatedStr,
    inHonorOrMemoryStr,
    thoseGivingStr,
  ]);

  return (
    <div>
      {emailData.honorForm === "Yes" ? (
        <div className="preview-content">
          <div className="storycloth-wrapper">
            <p className="storycloth"> Story Cloth Photo </p>
          </div>
          <h4 className="dear">
            {" "}
            Dear <span className="dynamic-text"> {dearHonoreeStr} </span>
          </h4>

          <p className="main-copy">
            This note is to let you know that{" "}
            <span className="dynamic-text"> {thoseGivingStr} </span> has made a
            very generous donation to Common Threads Project in
            <span className="dynamic-text"> {inHonorOrMemoryStr} </span>. We are
            deeply grateful that they chose to{" "}
            <span className="dynamic-text"> {thesePeopleDonatedStr}</span>in
            this way. We join{" "}
            <span className="dynamic-text"> {thoseGivingStr} </span> in wishing
            you all the best.
          </p>

          <p className="main-copy">
            <em> Thank you for all your great work!</em>{" "}
          </p>

          <p className="main-copy">
            {" "}
            {emailData.customMsg === "" ? (
              <span className="dynamic-text"> Custom message </span>
            ) : (
              <em>{emailData.customMsg} </em>
            )}
          </p>

          <p className="main-copy"> Signature / Address</p>
        </div>
      ) : null}{" "}
    </div>
  );
};

export default HonorEmailPreview;
