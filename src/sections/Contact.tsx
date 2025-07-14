import { useState } from 'react';
import AnimatedHeader from './../components/AnimatedHeader';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the data
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section flex-section-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <AnimatedHeader text='Contact Me' className='mb-1 font-bold text-center'/>
      <div className="w-full max-w-lg bg-[var(--card)] rounded-2xl shadow-xl p-8 flex flex-col gap-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-lg px-3 py-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              placeholder="you@email.com"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="rounded-lg px-3 py-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition"
              placeholder="Subject"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="rounded-lg px-3 py-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition resize-none"
              placeholder="Type your message here..."
            />
          </label>
          <Button
            type="submit"
            className="mt-2 font-semibold rounded-lg py-2 transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--sborder-e-secondary)]"
            disabled={submitted}
          >
            {submitted ? 'Sent!' : 'Send'}
          </Button>
        </form>
      </div>
    </section>
  );
}