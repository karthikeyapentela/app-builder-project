import React from "react";

const InputRenderer = ({ field, value, onChange }) => {
  if (!field?.name || !field?.type) {
    return <p style={{ color: "red" }}>Invalid field config</p>;
  }

  switch (field.type) {
    case "text":
      return (
        <div style={styles.field}>
          <label>{field.name}</label>
          <input
            style={styles.input}
            value={value || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        </div>
      );

    case "number":
      return (
        <div style={styles.field}>
          <label>{field.name}</label>
          <input
            type="number"
            style={styles.input}
            value={value || ""}
            onChange={(e) => onChange(field.name, Number(e.target.value))}
          />
        </div>
      );

    case "boolean":
      return (
        <div style={styles.field}>
          <label>
            <input
              type="checkbox"
              checked={value || false}
              onChange={(e) => onChange(field.name, e.target.checked)}
            />
            {field.name}
          </label>
        </div>
      );

    case "date":
      return (
        <div style={styles.field}>
          <label>{field.name}</label>
          <input
            type="date"
            style={styles.input}
            value={value || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
        </div>
      );

    default:
      return <p>Unsupported type: {field.type}</p>;
  }
};

const styles = {
  field: { marginBottom: "10px" },
  input: { padding: "8px", width: "100%" },
};

export default InputRenderer;