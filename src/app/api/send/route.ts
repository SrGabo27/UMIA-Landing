import { Resend } from "resend";
import { EmailTemplate } from "../../components/emailTemplate";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, accept } = body;

    if (!name || !email || !message || !phone || !accept) {
      return NextResponse.json(
        { message: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "UMIA <no-reply@umiasalud.com>",
      to: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      react: EmailTemplate({ name, email, phone, message, accept }),
    });

    return NextResponse.json(
      { message: "Correo enviado con éxito", emailResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
