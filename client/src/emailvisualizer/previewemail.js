import React, { useEffect } from "react";
import ThisIsWhatYouMakePossible from "./thisiswhatyoumakepossible";

const IntroSentence = (props) => {
  const templateType = props.emailData.templateType;

  const emailData = props.emailData;

  return (
    <span>
      {templateType === "New donor" ? (
        <span>
          Welcome to the Common Threads family! We are delighted you have chosen
          to join our mission and appreciate your generous contribution. Your
          gift provides hope for survivors of sexual violence.
        </span>
      ) : (
        <span>
          Thank you very much for contributing
          <span className="dynamic-text">{emailData.donationAmount} </span> to
          Common Threads Project! We are truly grateful that you are such a
          loyal supporter of this work. Together we can make a real difference
          in the lives of those who have been subjected to gender based
          violence, war, and displacement. Because of your generosity, girls and
          women in CTP circles have opportunities for healing that they urgently
          need and deserve. They can move from despair to strength, and from
          shame to dignity to reclaim their futures.
        </span>
      )}
    </span>
  );
};

const DearDonorStr = (props) => {
  function checkForUndefinedFirstName(firstName) {
    return firstName === undefined ? "FIRST NAME REQUIRED" : firstName;
  }

  const determineNameStr = () => {
    // this function returns the str of names to be grammatically correct after 'Dear' in case the user has added more than 1 donor

    const firstNames = props.allNames.map((obj) => {
      const firstName = checkForUndefinedFirstName(obj.donorFirstName);
      return firstName;
    });
    //first name only

    if (firstNames.length === 1) {
      // console.log('1 name')
      const firstName = firstNames[0];

      return `${firstName}`;
    }

    // 2 names only

    if (firstNames.length === 2) {
      //  console.log('2 names')
      return `${firstNames[0]} and ${firstNames[1]}`;
    } else {
      //more than 2 names
      // console.log('more than 2 names')

      let finalStr = "";

      const numberOfNames = firstNames.length;

      firstNames.forEach((name, index) => {
        if (index !== numberOfNames - 1) {
          finalStr += `${name}, `;
        } else {
          finalStr += `and ${name}`;
        }
      });

      return finalStr;
    }
  };

  const finalStr = determineNameStr();

  useEffect(() => {
    props.updateUserChoice({ donorStr: finalStr });
  }, [finalStr]);

  return (
    <span>
      {props.allNames.length > 0 ? (
        <span className="dynamic-text"> {finalStr}</span>
      ) : (
        <span className="dynamic-text"> Donor </span>
      )}
    </span>
  );
};

const EmailPreview = (props) => {
  const emailData = props.emailData;

  const allNames = Array.isArray(emailData.donorNames)
    ? emailData.donorNames
    : Object.values(emailData.donorNames);

  return (
    <div className="preview-content">
      <h4 className="dear">
        Dear
        <DearDonorStr
          allNames={allNames}
          updateUserChoice={props.updateUserChoice}
        />
        ,
      </h4>

      <p className="main-copy">
        <IntroSentence emailData={emailData} />
        Because of you, women and girls who are most at risk during this time of
        crisis will have access to transformative trauma healing. They can
        become part of our Common Threads Project circles and build camaraderie
        with other women who share their experience.
      </p>

      <ThisIsWhatYouMakePossible layoutVersion={props.templateType} />
      <p className="main-copy">
        The women and girls of Common Threads Project appreciate your steadfast
        belief in the possibility of healing. Your gift of hope makes their
        recovery possible.
      </p>

      {emailData.taxParagraph === "Yes" ? (
        <p className="main-copy tax-paragraph">
          Please let this note serve as your receipt for a fully tax-deductible
          contribution of $
          <span className="dynamic-text"> {emailData.donationAmount} </span>
          to Common Threads Project on
          <span className="dynamic-text"> {emailData.donationDate} </span>. No
          goods or services were provided in exchange for this contribution.
          Common Threads Project is an exempt organization as described in
          Section 501(c)(3) of the Internal Revenue Code; EIN: 81-4212971.
        </p>
      ) : null}

      <p className="main-copy"> Signature / Address</p>
    </div>
  );
};

export default EmailPreview;
