import type { Handler, HandlerEvent } from "@netlify/functions";

// netlify/functions/send.js
interface RequestBody {
    firstName: string;
}

interface SuccessResponseBody {
    message: string;
    recipient: string;
}

interface ErrorResponseBody {
    error: string;
}

export const handler: Handler = async (event: HandlerEvent) => {
    // Check if it's a POST request
    if (event.httpMethod !== "POST") {
        const errorBody: ErrorResponseBody = { error: "Method not allowed" };
        return {
            statusCode: 405,
            body: JSON.stringify(errorBody)
        };
    }

    try {
        // Parse the request body
        // Add nullish coalescing for safety, although Netlify usually provides a body for POST
        const body: RequestBody = JSON.parse(event.body ?? '{}');
        const { firstName } = body;

        // Basic validation example
        if (!firstName) {
                const errorBody: ErrorResponseBody = { error: "Missing firstName in request body" };
                return {
                        statusCode: 400,
                        body: JSON.stringify(errorBody)
                };
        }

        // Here you would put your email sending logic
        // For example, using a service like SendGrid, Nodemailer, etc.
        console.log(`Sending email to ${firstName}`);

        // Return a success response
        const successBody: SuccessResponseBody = {
            message: "Email sent successfully",
            recipient: firstName
        };
        return {
            statusCode: 200,
            body: JSON.stringify(successBody)
        };
    } catch (error: unknown) {
        console.error("Error sending email:", error);
        const errorMessage = error instanceof Error ? error.message : "Failed to send email";
        const errorBody: ErrorResponseBody = { error: errorMessage };
        return {
            statusCode: 500,
            body: JSON.stringify(errorBody)
        };
    }
};