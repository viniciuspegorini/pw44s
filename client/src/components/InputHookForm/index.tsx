import { ChangeEvent } from "react";

interface IInputProps {
  labelFor: string;
  className: string;
  label: string;
  type: string;
  placeholder: string;
  hasError: boolean;
  error: string | undefined;
}

export function Input({
  labelFor,
  className,
  label,
  type,
  placeholder,
  hasError,
  error,
}: IInputProps) {
  let inputClassName = className;
  if (hasError) {
    inputClassName += hasError ? " is-invalid" : " is-valid";
  }

  return (
    <>
      <input type={type} className={inputClassName} placeholder={placeholder} />
      {label && <label htmlFor={labelFor}>{label}</label>}
      {hasError && <div className="invalid-feedback">{error}</div>}
    </>
  );
}
