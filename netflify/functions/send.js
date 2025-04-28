const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Check if it's a POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse the request body
    const body = JSON.parse(event.body);
    const { firstName } = body;

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing API key configuration" })
      };
    }

    // Since we can't directly use React components in Netlify functions,
    // you'll need to use HTML or a template literal
    const { data, error } = await resend.emails.send({
      from: 'Pixel Rebellion <hello@pixelrebellion.dev>',
      to: ['danmalmx@gmail.com'],
      subject: 'Howdy!',
      html: `
        <div>
          <h1>Hello, ${firstName}!</h1>
          <p>This is an email from Pixel Rebellion.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};