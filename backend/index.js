import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 測試 API
app.get("/devices", (req, res) => {
    res.json([
        { id: 1, name: "電錶-001", status: "online" },
        { id: 2, name: "逆變器-002", status: "offline" }
    ]);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Backend API running at http://0.0.0.0:${PORT}`);
});
