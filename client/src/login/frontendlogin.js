export async function attemptLogin(pwAttempt) {
  console.log(pwAttempt);

  //   const response = await fetch("/.netlify/functions/requestlogin", {
  const response = await fetch("/.netlify/functions/requestlogin", {
    // CHANGE TO NEW ENDPOINT
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ attempt: pwAttempt }), // ONE EMAIL ELEMENT IN ARRAY
  })
    .then((res) => res.json())
    .then(async (res) => {
      console.log(res);
      return res;
    });

  console.log(response);

  if (response.message === "Login success") {
    return { loggedIn: true };
  } else {
    return { loggedIn: false };
  }
}

// 'https://pure-mesa-05243.herokuapp.com/login'
