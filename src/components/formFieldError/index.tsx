import React from "react";

interface IProps {
  message: string;
}

const FormFieldError: React.FC<IProps> = ({ message }) => {
  return (
    <span className="dark-primary small d-flex align-items-center mt-1">
      {message}
    </span>
  );
};

export default FormFieldError;
