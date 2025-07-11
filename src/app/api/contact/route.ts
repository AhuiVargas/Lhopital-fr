import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const submissions: Record<string, number> = {};

export async function POST(req: Request) {
	const ip = req.headers.get("x-forwarded-for") || "local";
	const now = Date.now();

	// Rate limit per IP
	if (submissions[ip] && now - submissions[ip] < 60 * 1000) {
		return NextResponse.json(
			{ success: false, message: "Por favor espera antes de enviar otro mensaje." },
			{ status: 429 }
		);
	}

	const body = await req.json();
	const { name, email, phone, subject, message, extra_field } = body;

	// Honeypot
	if (extra_field) {
		return NextResponse.json({ success: false }, { status: 400 });
	}

	// Basic validation
	if (!name || !email || !phone || !message) {
		return NextResponse.json(
			{ success: false, message: "Por favor completa todos los campos obligatorios." },
			{ status: 400 }
		);
	}

	// Decide which 'from' email to use
	const fromEmail =
		process.env.RESEND_FROM_EMAIL_VERIFIED && process.env.RESEND_DOMAIN_VERIFIED === "true"
			? process.env.RESEND_FROM_EMAIL_VERIFIED
			: process.env.RESEND_FROM_EMAIL_FALLBACK;

	try {
		const result = await resend.emails.send({
			from: fromEmail!,
			to: [process.env.RESEND_TO_EMAIL!],
			subject: subject || "Nuevo mensaje desde el formulario de contacto",
			html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        ${subject ? `<p><strong>Asunto:</strong> ${subject}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
		});

		if (result.error) {
			console.error("Resend error:", result.error);
			return NextResponse.json(
				{ success: false, message: result.error.message },
				{ status: 500 }
			);
		}

		submissions[ip] = now;

		return NextResponse.json({ success: true, message: "Mensaje enviado correctamente." });
	} catch (error: unknown) {
		console.error("Error inesperado:", error);
		const message = error instanceof Error ? error.message : "Hubo un error al enviar el mensaje.";
		return NextResponse.json({ success: false, message }, { status: 500 });
	}
}
