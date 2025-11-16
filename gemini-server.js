// gemini-server.js

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";


const app = express();
app.use(cors());
app.use(express.json());

// Make sure GEMINI_API_KEY is set in your environment
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ GEMINI_API_KEY is not set");
  process.exit(1);
}

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey, // uses your env var
});

// Simple helper: ask Gemini to rewrite alert text for rescuers
async function refineAlertWithGemini(description) {
  const prompt = `
You are part of an app called HelpMeow that helps rescuers save distressed cats in NYC.

Rewrite the following alert description so that:
- It is clear and specific for animal rescuers.
- It includes location clues if any are mentioned.
- It keeps the same meaning but in more professional rescue language.

User description:
"${description}"
  `.trim();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  // New SDK returns .text for the unified text result :contentReference[oaicite:1]{index=1}
  return response.text;
}

// POST /api/gemini/refine-alert
app.post("/api/gemini/refine-alert", async (req, res) => {
  try {
    const { description } = req.body;

    if (!description || description.trim().length === 0) {
      return res.status(400).json({ error: "Description is required." });
    }

    const refined = await refineAlertWithGemini(description);
    res.json({ refinedDescription: refined });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({ error: "Failed to refine alert with Gemini." });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Gemini helper server running on http://localhost:${PORT}`);
});
