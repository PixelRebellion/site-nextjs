import EmailTemplate from '../../../components/email-template';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      budget,
      message, } = body;

    const { data, error } = await resend.emails.send({
      from: 'Pixel Rebellion <hello@pixelrebellion.dev>',
      to: email,
      subject: 'Howdy!',
      replyTo: email,
      react: EmailTemplate({ fullName, company, email }),
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