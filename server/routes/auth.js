import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    res.status(200).json({ text: response.data.choices[0].message.content });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    res.status(200).json({ text: response.data.choices[0].message.content });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
