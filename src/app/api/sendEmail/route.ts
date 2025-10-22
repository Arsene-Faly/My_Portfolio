import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "Nouveau message du site",
      text: message,
      html: `<p>${message}</p><p>De : ${name} (${email})</p>`,
    });

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erreur serveur inconnue";
    console.error(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
