import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("server started");
});

app.listen(PORT, () => {
  console.log(`Server running on the port http://localhost:${PORT}`);
});
