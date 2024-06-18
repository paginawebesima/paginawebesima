import React from 'react';

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className="error-message">
      {children}
    </div>
  );
}

export default ErrorMessage;
