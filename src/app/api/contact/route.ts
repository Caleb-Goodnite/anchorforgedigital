import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const PROJECT_TYPES = new Set([
	'Standard — $200',
	'Standard Plus — $275',
	'Pro — $450+',
	'Pro Plus — $650+',
	'Max — $950+',
	'Max Plus — Custom'
]);

function clean(value: unknown, maxLength: number): string {
	return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidEmail(value: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
	let payload: Record<string, unknown>;

	try {
		payload = await request.json();
	} catch {
		return NextResponse.json({ error: 'Please send the form again.' }, { status: 400 });
	}

	const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER;
	const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
	const recipient = process.env.CONTACT_TO || 'anchorforgedigital@gmail.com';

	const name = clean(payload?.name, 100);
	const senderEmail = clean(payload?.email, 254);
	const projectType = clean(payload?.projectType, 80);
	const message = clean(payload?.message, 5000);

	// Honeypot field for basic bot protection. Bots receive the same response as a valid request.
	if (clean(payload?.fax, 100)) {
		return NextResponse.json({ success: true });
	}

	if (!name || !isValidEmail(senderEmail) || !PROJECT_TYPES.has(projectType) || !message) {
		return NextResponse.json(
			{ error: 'Please complete every field with valid information.' },
			{ status: 400 }
		);
	}

	if (!gmailUser || !gmailAppPassword) {
		return NextResponse.json(
			{ error: 'The contact form is temporarily unavailable. Please email us directly.' },
			{ status: 503 }
		);
	}

	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: { user: gmailUser, pass: gmailAppPassword }
		});

		await transporter.sendMail({
			from: process.env.MAIL_FROM || gmailUser || recipient,
			to: recipient,
			replyTo: senderEmail,
			subject: `New Anchorforge project inquiry — ${projectType}`,
			text: [
				`Name: ${name}`,
				`Email: ${senderEmail}`,
				`Project type: ${projectType}`,
				'',
				message
			].join('\n')
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Contact form email failed', error);
		return NextResponse.json(
			{ error: 'We could not send your message. Please email us directly instead.' },
			{ status: 502 }
		);
	}
}
