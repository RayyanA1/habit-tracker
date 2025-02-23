import express from "express";

export const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).send("Server is healthy!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
