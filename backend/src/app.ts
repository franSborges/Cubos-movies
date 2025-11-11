import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

import { verifyJwt } from "./utils/jwt";
app.post("/debug/jwt", (req, res) => {
  try {
    const decoded = verifyJwt(req.body.token);
    res.json({ ok: true, decoded });
  } catch (e: any) {
    res.status(400).json({ ok: false, message: e?.message });
  }
});

app.use("/api/auth", authRouter);


export default app;