import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';

const gmailUser = env.GMAIL_USER || env.SMTP_USER;
const gmailAppPassword = env.GMAIL_APP_PASSWORD || env.SMTP_PASS;
const recipient = env.CONTACT_TO || 'anchorforgedigital@gmail.com';
const projectTypes = new Set([
	'Standard — $200',
	'Standard Plus — $275',
	'Pro — $450+',
	'Pro Plus — $650+',
	'Max — $950+',
	'Max Plus — Custom'
]);

function clean(value, maxLength) {
	return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createTransporter() {
	return nodemailer.createTransport({
		service: 'gmail',
		auth: { user: gmailUser, pass: gmailAppPassword }
	});
}

export async function POST({ request }) {
	let payload;

	try {
		payload = await request.json();
	} catch {
		return json({ error: 'Please send the form again.' }, { status: 400 });
	}

	const name = clean(payload?.name, 100);
	const senderEmail = clean(payload?.email, 254);
	const projectType = clean(payload?.projectType, 80);
	const message = clean(payload?.message, 5000);

	// Honeypot field for basic bot protection. Bots should receive the same response as a valid request.
	if (clean(payload?.website, 100)) {
		return json({ success: true });
	}

	if (!name || !isValidEmail(senderEmail) || !projectTypes.has(projectType) || !message) {
		return json({ error: 'Please complete every field with valid information.' }, { status: 400 });
	}

	if (!gmailUser || !gmailAppPassword) {
		return json(
			{ error: 'The contact form is temporarily unavailable. Please email us directly.' },
			{ status: 503 }
		);
	}

	try {
		await createTransporter().sendMail({
			from: env.MAIL_FROM || gmailUser || recipient,
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

		return json({ success: true });
	} catch (error) {
		console.error('Contact form email failed', error);
		return json(
			{ error: 'We could not send your message. Please email us directly instead.' },
			{ status: 502 }
		);
	}
}
