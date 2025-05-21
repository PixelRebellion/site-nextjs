interface EmailTemplateProps {
  fullName: string;
  company: string;
  email: string;

}

const EmailTemplate = ({fullName, company, email}: EmailTemplateProps) => {

  const firstName = fullName.split(" ")[0];

  return (
    <div className="bg-black text-white p-6 rounded-lg">
    <h3>Welcome, {firstName}!</h3>
    <p>We are excited that you {company && `and ${company}`} have reached out.</p>
    <p>We'll get back to you on {email} within 24 hours.</p>
    <p>Best regards,</p>
    <p>Pixel Rebellion Team</p>
  </div>  )
}

export default EmailTemplate