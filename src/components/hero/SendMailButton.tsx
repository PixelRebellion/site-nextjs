"use client";

const sendEmail = async () => {
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Email sending failed:", errorData);
      throw new Error(`Failed to send email: ${response.status}`);
    }

    const data = await response.json();
    console.log("Email sent successfully:", data);
    alert("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send email. Check console for details.");
  }
}

const SendMailButton = () => {
  return (
    <button
      onClick={sendEmail}
      className="px-6 py-2 border border-black rounded-lg cursor-pointer"
    >
      Send mail
    </button>
  )
}

export default SendMailButton;