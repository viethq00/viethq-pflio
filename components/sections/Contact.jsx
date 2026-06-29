"use client";
import { useState } from "react";
import { projectTypes, contactInfo, profile } from "@/lib/data";
import { IconSend, contactIcons } from "@/components/icons";
import Select from "@/components/Select";

const EMPTY = { first: "", last: "", email: "", type: projectTypes[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [noteOk, setNoteOk] = useState(false);
  const [note, setNote] = useState("// your message goes straight to my inbox");
  const [touched, setTouched] = useState(false);

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const missing = (v) => touched && !v.trim();
  const errStyle = (v) => (missing(v) ? { borderColor: "var(--rose)" } : undefined);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!form.first.trim() || !form.last.trim() || !form.email.trim() || !form.message.trim()) {
      setNoteOk(false);
      setNote("// please fill in the required fields");
      return;
    }
    setSending(true);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: form.first,
        lastname: form.last,
        email: form.email,
        service: form.type,
        message: form.message,
      }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("send failed");
        const name = form.first.trim();
        setSending(false);
        setSent(true);
        setNoteOk(true);
        setNote(`// thanks${name ? ", " + name : ""} — I'll be in touch within a day ✓`);
        setForm(EMPTY);
        setTouched(false);
        setTimeout(() => setSent(false), 2600);
      })
      .catch(() => {
        setSending(false);
        setNoteOk(false);
        setNote(`// something went wrong — email me directly at ${profile.email}`);
      });
  };

  return (
    <section className="wrap" id="contact">
      <div className="sec-head reveal">
        <span className="eyebrow">Get in touch</span>
        <h2>Let&apos;s work together <span className="star">★</span></h2>
        <p>Have a project, a role, or just a question? Drop me a line — I usually reply within a day.</p>
      </div>
      <div className="contact-grid">
        <form className="form reveal d1" onSubmit={onSubmit} noValidate>
          <div className="row">
            <div className="field">
              <label htmlFor="cf-first">First name</label>
              <input id="cf-first" name="firstname" type="text" placeholder="Jane" value={form.first} onChange={set("first")} style={errStyle(form.first)} aria-invalid={missing(form.first) || undefined} />
            </div>
            <div className="field">
              <label htmlFor="cf-last">Last name</label>
              <input id="cf-last" name="lastname" type="text" placeholder="Doe" value={form.last} onChange={set("last")} style={errStyle(form.last)} aria-invalid={missing(form.last) || undefined} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} style={errStyle(form.email)} aria-invalid={missing(form.email) || undefined} />
            </div>
            <div className="field">
              <label htmlFor="cf-type">Project type</label>
              <Select
                id="cf-type"
                options={projectTypes}
                value={form.type}
                onChange={(v) => setForm((p) => ({ ...p, type: v }))}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              placeholder="Tell me about your project, timeline and goals…"
              value={form.message}
              onChange={set("message")}
              style={errStyle(form.message)}
              aria-invalid={missing(form.message) || undefined}
            />
          </div>
          <button className="btn btn-primary submit" type="submit" disabled={sending}>
            {sending ? "Sending…" : sent ? "Message sent ✓" : (<>Send message <IconSend className="ico" /></>)}
          </button>
          <div className={noteOk ? "form-note ok" : "form-note"} role="status" aria-live="polite">{note}</div>
        </form>

        <aside className="contact-side reveal d2">
          {contactInfo.map((c) => (
            <a className="cinfo" key={c.k} href={c.href || undefined}>
              <span className="ic">{contactIcons[c.icon]}</span>
              <div>
                <div className="k">{c.k}</div>
                <div className="v">{c.v}</div>
              </div>
            </a>
          ))}
          <div className="contact-cta">
            <h4>Currently available</h4>
            <p>Taking on freelance projects and open to full-time engineering roles.</p>
            <span className="avail"><span className="dot" />Available for work</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
