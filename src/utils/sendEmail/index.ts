async function sendEmail(params: { formState: { [key: string]: string } }) {
  const { formState } = params;

  try {
    console.log("formState: ", formState);

    const { name, email, message } = formState;

    const postConfig = {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/resend", postConfig);

    const responseJSON = await response.json();

    console.log("responseJSON: ", responseJSON);

    const { sent } = responseJSON;

    return { message: responseJSON?.message, sent };
  } catch (error) {
    console.log("sendEmail - ERROR: ", error);
    return { message: "Couldn't send email", sent: false };
  }
}

export default sendEmail;
