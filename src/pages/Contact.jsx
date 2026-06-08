import { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECIPIENT = import.meta.env.VITE_RECIPIENT_EMAIL || 'henryscomicshop@gmail.com';

const NAME_MAX = 80;
const EMAIL_MAX = 120;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;
const COOLDOWN_MS = 30_000;
const DAILY_LIMIT = 3;
const RATE_KEY = 'hcs.contact.rate.v1';

function readRate() {
  try {
    const raw = window.localStorage.getItem(RATE_KEY);
    if (!raw) return { last: 0, day: '', count: 0 };
    const parsed = JSON.parse(raw);
    return {
      last: Number(parsed.last) || 0,
      day: String(parsed.day || ''),
      count: Number(parsed.count) || 0,
    };
  } catch {
    return { last: 0, day: '', count: 0 };
  }
}

function writeRate(value) {
  try {
    window.localStorage.setItem(RATE_KEY, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState('');
  const [status, setStatus] = useState({ kind: 'idle' });

  const configured = useMemo(
    () => Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY),
    [],
  );

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ kind: 'idle' });

    if (hp.trim() !== '') {
      setStatus({ kind: 'success', text: 'Thanks! Your message is on its way.' });
      return;
    }

    if (!name.trim() || name.length > NAME_MAX) {
      setStatus({ kind: 'error', text: 'Please enter a name (up to 80 characters).' });
      return;
    }
    if (!isValidEmail(email) || email.length > EMAIL_MAX) {
      setStatus({ kind: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (message.trim().length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
      setStatus({
        kind: 'error',
        text: `Please write a message between ${MESSAGE_MIN} and ${MESSAGE_MAX} characters.`,
      });
      return;
    }

    const rate = readRate();
    const now = Date.now();
    if (now - rate.last < COOLDOWN_MS) {
      const wait = Math.ceil((COOLDOWN_MS - (now - rate.last)) / 1000);
      setStatus({ kind: 'error', text: `Please wait ${wait} more seconds before sending another message.` });
      return;
    }
    const day = today();
    const count = rate.day === day ? rate.count : 0;
    if (count >= DAILY_LIMIT) {
      setStatus({ kind: 'error', text: 'You\u2019ve already sent a few messages today. Please try again tomorrow.' });
      return;
    }

    if (!configured) {
      setStatus({
        kind: 'error',
        text: 'The contact form isn\u2019t set up in this environment. Please email henryscomicshop@gmail.com instead.',
      });
      return;
    }

    setStatus({ kind: 'sending' });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.slice(0, NAME_MAX),
          from_email: email.slice(0, EMAIL_MAX),
          message: message.slice(0, MESSAGE_MAX),
          to_email: RECIPIENT,
        },
        { publicKey: PUBLIC_KEY },
      );
      writeRate({ last: now, day, count: count + 1 });
      setStatus({ kind: 'success', text: 'Thanks! Your message is on its way.' });
      setName('');
      setEmail('');
      setMessage('');
      formRef.current?.reset();
    } catch (err) {
      setStatus({
        kind: 'error',
        text: 'Something went wrong sending the message. Please try again in a bit, or email henryscomicshop@gmail.com.',
      });
      // Surface the error in dev so the maintainer can see what failed.
      if (import.meta.env.DEV) console.error('EmailJS send failed', err);
    }
  }

  return (
    <article className="legal-page">
      <header className="legal-page-header">
        <h2 className="section-title">Contact Henry&apos;s Comic Shop</h2>
        <p className="legal-meta">A grown-up reads every message.</p>
      </header>

      <section className="legal-section">
        <h3>Send a message</h3>
        <p>
          Use the form below to send fan mail, ask a question, or let Henry know
          which comic you liked best. If you&apos;re a kid, <strong>please ask a parent
          or guardian before sending a message</strong> &mdash; and never include
          things like your address, phone number, or photos.
        </p>
        <p>
          You can also email <strong>henryscomicshop@gmail.com</strong> directly.
        </p>

        <form ref={formRef} className="contact-form" onSubmit={onSubmit} noValidate>
          <label className="form-field">
            <span>Your name</span>
            <input
              type="text"
              name="from_name"
              value={name}
              maxLength={NAME_MAX}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>

          <label className="form-field">
            <span>Your (or your parent&apos;s) email</span>
            <input
              type="email"
              name="from_email"
              value={email}
              maxLength={EMAIL_MAX}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className="form-field">
            <span>Message</span>
            <textarea
              name="message"
              value={message}
              minLength={MESSAGE_MIN}
              maxLength={MESSAGE_MAX}
              rows={6}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <small className="form-help">
              {message.length}/{MESSAGE_MAX} characters
            </small>
          </label>

          {/* Honeypot field — hidden from humans, often filled by bots. */}
          <div className="form-honeypot" aria-hidden="true">
            <label>
              Leave this blank
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
              />
            </label>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn-main"
              disabled={status.kind === 'sending'}
            >
              {status.kind === 'sending' ? 'Sending…' : '✉️ Send message'}
            </button>
          </div>

          {status.kind === 'error' && (
            <p className="form-status form-status-error" role="alert">{status.text}</p>
          )}
          {status.kind === 'success' && (
            <p className="form-status form-status-success" role="status">{status.text}</p>
          )}
        </form>
      </section>

      <section className="legal-section">
        <h3>How we handle your message</h3>
        <p>
          Your name, email, and message are sent through{' '}
          <a href="https://www.emailjs.com/" rel="noopener noreferrer" target="_blank">EmailJS</a>{' '}
          to Henry&apos;s parents&apos; inbox. We only use it to email you back. See the{' '}
          <a href="#/privacy">Privacy Policy</a> for the full story.
        </p>
      </section>
    </article>
  );
}
