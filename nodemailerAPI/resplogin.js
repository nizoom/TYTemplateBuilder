const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const { v4: uuidv4 } = require("uuid");

async function login(reqBody) {
  const correctPW = process.env.APP_PW;
  const attemptedPW = reqBody.attempt;

  console.log(correctPW);

  console.log(reqBody);
  if (correctPW === attemptedPW) {
    console.log("success");
    const uuid = uuidv4();
    return {
      result: true,
      uuid: uuid,
    };
  }
  console.log("failed");
  return {
    result: false,
  };
}

module.exports = login;
