'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const EMAIL = 'anchorforgedigital@gmail.com';

const PROJECT_TYPES = [
	'Standard — $200',
	'Standard Plus — $275',
	'Pro — $450+',
	'Pro Plus — $650+',
	'Max — $950+',
	'Max Plus — Custom'
];

type FieldErrors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
	const [name, setName] = useState('');
	const [senderEmail, setSenderEmail] = useState('');
	const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
	const [message, setMessage] = useState('');
	const [fax, setFax] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState('');
	const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

	async function submitForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError('');

		// Client-side validation so errors can be wired to aria-invalid
		const errors: FieldErrors = {};
		if (!name.trim()) errors.name = 'Please enter your name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim()))
			errors.email = 'Please enter a valid email address.';
		if (!message.trim()) errors.message = 'Please tell us a little about your project.';
		setFieldErrors(errors);
		if (Object.keys(errors).length > 0) return;

		setSubmitting(true);
		setSubmitted(false);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ name, email: senderEmail, projectType, message, fax })
			});
			const result: { error?: string } = await response.json();

			if (!response.ok) throw new Error(result.error);
			setSubmitted(true);
			setName('');
			setSenderEmail('');
			setMessage('');
			setFax('');
		} catch (requestError) {
			setError(
				requestError instanceof Error && requestError.message
					? requestError.message
					: 'We could not send your message. Please email us directly instead.'
			);
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section id="contact" className={styles.contact} aria-labelledby="contact-title">
			<div className={styles.contactContainer}>
				<div className={styles.contactCopy}>
					<span className="kicker">Start a conversation</span>
					<h2 id="contact-title">
						Not sure where to <em>begin</em>?
					</h2>
					<p>
						Tell us what your business does, what you need, and what you&rsquo;re working with.
						We&rsquo;ll help you find the right starting point.
					</p>
					<a className={styles.contactFallback} href={`mailto:${EMAIL}`}>
						Or email {EMAIL} directly ↗
					</a>
				</div>

				<form className={`${styles.contactForm} glass-medium`} onSubmit={submitForm} noValidate>
					<div className={styles.formField}>
						<label htmlFor="name">Name</label>
						<input
							id="name"
							required
							autoComplete="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							aria-invalid={fieldErrors.name ? true : undefined}
							aria-describedby={fieldErrors.name ? 'name-error' : undefined}
						/>
						{fieldErrors.name && (
							<p id="name-error" className={styles.formFieldError}>
								{fieldErrors.name}
							</p>
						)}
					</div>
					<div className={styles.formField}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							required
							autoComplete="email"
							value={senderEmail}
							onChange={(event) => setSenderEmail(event.target.value)}
							aria-invalid={fieldErrors.email ? true : undefined}
							aria-describedby={fieldErrors.email ? 'email-error' : undefined}
						/>
						{fieldErrors.email && (
							<p id="email-error" className={styles.formFieldError}>
								{fieldErrors.email}
							</p>
						)}
					</div>
					<div className={styles.formField}>
						<label htmlFor="project-type">Project type</label>
						<select
							id="project-type"
							value={projectType}
							onChange={(event) => setProjectType(event.target.value)}
						>
							{PROJECT_TYPES.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>
					<div className={styles.formField}>
						<label htmlFor="message">What are you hoping to build?</label>
						<textarea
							id="message"
							required
							rows={5}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							aria-invalid={fieldErrors.message ? true : undefined}
							aria-describedby={fieldErrors.message ? 'message-error' : undefined}
						/>
						{fieldErrors.message && (
							<p id="message-error" className={styles.formFieldError}>
								{fieldErrors.message}
							</p>
						)}
					</div>
					{/* Honeypot: hidden from humans, ignored by password managers because of the neutral name */}
					<div className={styles.formHoneypot} aria-hidden="true">
						<label htmlFor="fax">Fax</label>
						<input
							id="fax"
							name="fax"
							value={fax}
							onChange={(event) => setFax(event.target.value)}
							tabIndex={-1}
							autoComplete="off"
						/>
					</div>
					<button className="btn-primary" type="submit" disabled={submitting}>
						{submitting ? 'Sending…' : 'Send project inquiry'} <span aria-hidden="true">↗</span>
					</button>
					{submitted && (
						<p className={styles.formNote} role="status">
							Message sent. We&rsquo;ll get back to you soon.
						</p>
					)}
					{error && (
						<p className={styles.formError} role="alert">
							{error}
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
