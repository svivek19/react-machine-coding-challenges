import React, { useState } from "react";

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validate() {
    const newError = {};

    config.field.forEach((field) => {
      const value = formData[field.name] || "";
      const rule = field.validation || {};

      if (rule.required && !value.trim()) {
        newError[field.name] = `${field.label} is required`;
      }

      if (rule.minLength && value.length < rule.minLength) {
        newError[
          field.name
        ] = `${field.label} must be at least ${rule.minLength} charecters`;
      }
    });
    return newError;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.field.map((val) => (
        <div key={val.name}>
          <label htmlFor={val.name}>{val.label}</label>
          <input
            name={val.name}
            type={val.type}
            value={formData[val.name] || ""}
            onChange={handleChange}
          />
          {errors[val.name] && (
            <span style={{ color: "red" }}>{errors[val.name]}</span>
          )}
        </div>
      ))}
      <button type="submit">{config.submitButtonText}</button>
    </form>
  );
};

export default DynamicForm;
