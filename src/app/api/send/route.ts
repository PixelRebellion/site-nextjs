import { EmailTemplate } from '../../../components/email-template';
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
      subject: 'Hello world',
      react: await EmailTemplate({ firstName: firstName || 'You!' }),
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