import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

// --- CORS (dev only) ---
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  app.options("/api/contact", cors());
}

// Parse JSON bodies
app.use(express.json());

console.log("Loaded env:", {
  host: process.env.SMTP_HOST,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS ? "***" : "MISSING",
});

// Gmail transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("SMTP error:", err);
  } else {
    console.log("SMTP connection OK");
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Assist.wtf Website" <${process.env.SMTP_USER}>`,
      to: "michael@assist.wtf",
      replyTo: email,
      subject: `New Assist.wtf contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    console.log("Email sent:", info.messageId);
    res.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`);
});
