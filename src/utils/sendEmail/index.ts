async function sendEmail(params: { formState: { [key: string]: string } }) {
  const { formState } = params;

  try {
    const postConfig = {
      method: "POST",
      body: JSON.stringify({ ...formState }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("/api/resend", postConfig);

    const responseJSON = await response.json();

    console.log("responseJSON: ", responseJSON);

    const { message, sent } = responseJSON;

    return { message, sent };
  } catch (error) {
    console.log("sendEmail - ERROR: ", error);
    return { message: "Couldn't send email", sent: false };
  }
}

export default sendEmail;
