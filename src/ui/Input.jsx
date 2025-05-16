import React from "react";

export default function Input({ type, className, onChange, placeholder,value }) {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
          placeholder={placeholder}
          value={value}
    />
  );
}
