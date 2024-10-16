import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

// export const runtime = "edge";
// export const dynamic = "force-dynamic";

const RESEND = process.env.RESEND;

type ResponseData = {
  message: string;
  sent?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { name, email, message } = req.body;
    console.log("req.body: ", { name, email, message });

    const resend = new Resend(RESEND);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "metalerfundidora@gmail.com",
      subject: `Mensaje de ${email}`,
      html: `
        <div>
            <p>${message}</p>
            <p>Contactar a ${name} al email ${email}</p>
        </div>
      `,
    });

    console.log("send response: ", { data, error });

    res.status(200).json({ message: "Email sent", sent: true });
  } catch (error) {
    console.log("pages/api/resend - ERROR: ", error);
    res.status(404).json({ message: "Couldn't send email", sent: false });
  }
}
