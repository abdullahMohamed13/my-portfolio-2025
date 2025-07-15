import { useState } from 'react';
import AnimatedHeader from './../components/AnimatedHeader';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

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

  const isValidGmail = (email: string) => {
    return /@gmail\.com$/i.test(email.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidGmail(form.email)) {
      toast.error('Please enter a valid Gmail address ending with @gmail.com');
      return;
    }
    emailjs.sendForm(
      'service_x4ha7bn',
      'template_q4kyjou',
      e.currentTarget,
      '0zoGJUCb_5YDXPkDI'
    )
    .then(() => {
        setSubmitted(true);
        setForm({ email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
        toast.success("Your message is successfully sent, I'll reach out to you soon <3");
    }, (error) => {
        toast.error('Failed to send message, please try again.');
        console.log(error);
    });
  };

  return (
    <section id="contact" className="flex-section-center px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <AnimatedHeader text='Contact Me' className='mb-1 font-bold text-center'/>
      <div className="w-full max-w-lg bg-[var(--card)] rounded-2xl shadow-xl p-8 flex flex-col gap-6">
      <p className="text-base text-red-500 font-medium -mt-2">
        Kindly enter a valid Gmail address to ensure I can get back to you.
      </p>
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