// components/ContactEmail.tsx

import {
	Html,
	Head,
	Body,
	Container,
	Heading,
	Text,
	//   Img,
	Button,
	Section,
} from "@react-email/components";

type ContactEmailProps = {
	name: string;
	email: string;
	phone: string;
	subject?: string;
	message: string;
};

export function ContactEmail({
	name,
	email,
	phone,
	subject,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Body
				style={{
					fontFamily: "Arial, sans-serif",
					backgroundColor: "#f6f6f6",
					padding: "40px 0",
				}}
			>
				<Container
					style={{
						backgroundColor: "#ffffff",
						padding: "32px",
						borderRadius: "8px",
						width: "100%",
						maxWidth: "600px",
						margin: "0 auto",
						boxShadow: "0 0 12px rgba(0,0,0,0.05)",
					}}
				>
					{/* Logo */}
					{/* <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <a href="https://lhopital-fr.mx" target="_blank">
              <Img
                src="https://lhopital-fr.mx/logo-horizontal.png" // uncomment when hosted logo
                alt="Lhopital Logo"
                width="180"
                style={{ margin: "0 auto" }}
              />
            </a>
          </Section> */}

					<Heading
						style={{ color: "#b01f29", fontSize: "22px", marginBottom: "24px" }}
					>
						Nuevo mensaje de contacto
					</Heading>

					<Text>
						<strong>Nombre:</strong> {name}
					</Text>
					<Text>
						<strong>Email:</strong> {email}
					</Text>
					<Text>
						<strong>Teléfono:</strong> {phone}
					</Text>
					{subject && (
						<Text>
							<strong>Asunto:</strong> {subject}
						</Text>
					)}
					<Text>
						<strong>Mensaje:</strong>
					</Text>
					<Text style={{ textAlign: "justify" }}>{message}</Text>

					{/* CTA button */}
					<Section style={{ marginTop: "32px", textAlign: "center" }}>
						<Button
							href={`mailto:${email}`}
							style={{
								backgroundColor: "#b01f29",
								color: "#ffffff",
								padding: "12px 24px",
								borderRadius: "6px",
								fontWeight: "bold",
								textDecoration: "none",
							}}
						>
							Responder mensaje
						</Button>
					</Section>

					<Text
						style={{
							fontSize: "12px",
							color: "#999999",
							marginTop: "40px",
							textAlign: "center",
						}}
					>
						Este mensaje fue enviado desde el formulario de contacto de
						lhopital-fr.mx
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
