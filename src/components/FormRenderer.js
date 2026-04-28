import React, { useState } from "react";
import InputRenderer from "./InputRenderer";

const FormRenderer = ({ entity, onSubmit }) => {
  const [formData, setFormData] = useState({});

  if (!entity || !Array.isArray(entity.fields)) {
    return <p>Invalid configuration</p>;
  }

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let field of entity.fields) {
      if (field.required && !formData[field.name]) {
        alert(`${field.name} is required`);
        return;
      }
    }

    onSubmit(formData);
    alert("Data submitted successfully ✅");
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{entity.name} Form</h2>

      {entity.fields.map((field, index) => (
        <InputRenderer
          key={index}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRenderer;