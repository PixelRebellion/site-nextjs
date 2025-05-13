import EmailTemplate from '../../../components/email-template';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { firstName } = body;

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return Response.json(
        { error: "Missing API key configuration" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Pixel Rebellion <hello@pixelrebellion.dev>',
      to: ['danmalmx@gmail.com'],
      subject: 'Howdy!',
      react: EmailTemplate({ firstName: firstName }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// import EmailTemplate from "@/components/email-template";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, message } = body;
//     const data = await resend.emails.send({
//       from: "Mise en Digital <hello@miseendigital.com>",
//       to: "hello@miseendigital.com",
//       subject: "Message from " + name + " via miseendigital.com",
//       replyTo: email,
//       html: message,
//     });
//     const dataResponse = await resend.emails.send({
//       from: "Mise en Digital <hello@miseendigital.com>",
//       to: email,
//       subject: "Your message to Mise en Digital",
//       react: EmailTemplate({ message }),
//     });

//     return NextResponse.json({ data, dataResponse });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
