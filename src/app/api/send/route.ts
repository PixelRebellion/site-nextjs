import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { firstName } = body;

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return Response.json(
        { error: "Missing API key configuration" },
        { status: 500 }
      );
    }

    const emailHtml = await EmailTemplate({ firstName: firstName || 'John' });

    const { data, error } = await resend.emails.send({
      from: 'hello <hello@pixelrebellion.dev>',
      to: ['danmalmx@gmail.com'],
      subject: 'Hello world',
      react: emailHtml,
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