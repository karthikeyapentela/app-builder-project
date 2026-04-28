import React, { useState, useEffect } from "react";
import config from "../utils/config";
import FormRenderer from "../components/FormRenderer";
import TableRenderer from "../components/TableRenderer";
import CSVUpload from "../components/CSVUpload";

const Dashboard = () => {
  const entity = config.entities[0];
  const [data, setData] = useState([]);

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Submit form data
  const handleSubmit = async (formData) => {
    try {
      await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Data added successfully ✅"); // notification
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Load data on page load
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{config.appName}</h1>

      <div style={styles.card}>
        {/* CSV Upload */}
        <CSVUpload entityName={entity.name} onUpload={fetchData} />

        {/* Dynamic Form */}
        <FormRenderer entity={entity} onSubmit={handleSubmit} />
      </div>

      <div style={styles.card}>
        {/* Dynamic Table */}
        <TableRenderer entity={entity} data={data} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;