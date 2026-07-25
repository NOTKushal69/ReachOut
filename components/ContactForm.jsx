'use client';

import { useState } from 'react';

const EMAIL = 'hello@reachoutcreative.com';

const inputClass =
  'w-full bg-white/10 border border-white/25 rounded-xl px-4 py-3 text-paper placeholder-paper/50 focus:border-sun focus:outline-none transition-colors duration-200';

/**
 * No backend required: on submit we compose a prefilled mailto to the studio
 * inbox. Keeps the form honest and functional for a static deploy.
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New project inquiry — ${form.name || 'Website'}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 max-w-xl">
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className="uppercase text-xs tracking-wide text-paper/60">Name</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="uppercase text-xs tracking-wide text-paper/60">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="you@email.com"
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="uppercase text-xs tracking-wide text-paper/60">Service</span>
        <select value={form.service} onChange={update('service')} className={inputClass}>
          <option value="" className="bg-navy">Select a service</option>
          <option value="Performance Marketing" className="bg-navy">Performance Marketing</option>
          <option value="Social Media Marketing" className="bg-navy">Social Media Marketing</option>
          <option value="Content Marketing" className="bg-navy">Content Marketing</option>
          <option value="Website Development" className="bg-navy">Website Development</option>
          <option value="Workflow Automation" className="bg-navy">Workflow Automation</option>
          <option value="Something else" className="bg-navy">Something else</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="uppercase text-xs tracking-wide text-paper/60">Project details</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your project, timeline and goals…"
          className={`${inputClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="self-start inline-flex items-center justify-center rounded-full bg-sun text-navy font-bold uppercase tracking-wide px-8 py-4 hover:bg-paper transition-colors duration-300"
      >
        Send Inquiry
      </button>
    </form>
  );
}
