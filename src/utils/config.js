const config = {
  appName: "Task Manager",
  entities: [
    {
      name: "tasks",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "text" },
        { name: "completed", type: "boolean" },
        { name: "priority", type: "number" },
        { name: "dueDate", type: "date" }
      ]
    }
  ]
};

export default config;