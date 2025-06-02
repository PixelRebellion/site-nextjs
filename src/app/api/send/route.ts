import { NextRequest, NextResponse } from 'next/server';
import EmailTemplate from '../../../components/email-template';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  console.log('API route hit - POST method');
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      company,
      budget,
      message, } = body;
    console.log('Received data:', { fullName, email, company, budget, message });

    const { data, error } = await resend.emails.send({
      from: 'Pixel Rebellion <hello@pixelrebellion.dev>',
      to: email,
      subject: `We received your message, ${fullName}!`,
      replyTo: email,
      react: EmailTemplate({ fullName, company, email }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}