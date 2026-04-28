import React from "react";
import Papa from "papaparse";

const CSVUpload = ({ entityName, onUpload }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const data = results.data;

        if (!data.length) {
          alert("Empty CSV file");
          return;
        }

        for (let row of data) {
          const cleanedRow = {
            ...row,
            completed: row.completed === "true",
          };

          await fetch(`http://localhost:5000/${entityName}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cleanedRow),
          });
        }

        alert("CSV Uploaded Successfully 🚀");
        onUpload();
      },
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Upload CSV</h3>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
};

export default CSVUpload;