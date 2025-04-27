// import * as React from 'react';


// const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <div>
//     <h3>Welcome, {firstName}!</h3>
//   </div>
// );

// export default EmailTemplate;

interface EmailTemplateProps {
  firstName: string;
}

const EmailTemplate = ({firstName}: EmailTemplateProps) => {

  return (
    <div>
    <h3>Welcome, {firstName}!</h3>
  </div>  )
}

export default EmailTemplate