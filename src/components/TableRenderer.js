import React from "react";

const TableRenderer = ({ entity, data }) => {
  if (!data.length) return <p>No data yet</p>;

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {entity.fields.map((field, i) => (
            <th key={i} style={styles.th}>
              {field.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {entity.fields.map((field, j) => (
              <td key={j} style={styles.td}>
                {row[field.name]?.toString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    background: "#007bff",
    color: "white",
    padding: "10px",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  },
};

export default TableRenderer;