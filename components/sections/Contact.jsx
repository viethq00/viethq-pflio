"use client";
import { useState } from "react";
import axios from "axios";
import { projectTypes, contactInfo, profile } from "@/lib/data";
import { IconSend, contactIcons } from "@/components/icons";

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
    const fd = new FormData();
    fd.append("firstname", form.first);
    fd.append("lastname", form.last);
    fd.append("email", form.email);
    fd.append("service", form.type);
    fd.append("message", form.message);
    axios
      .post("https://api.trephuongbac.com/users/send-email", fd)
      .then(() => {
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
              <label>First name</label>
              <input type="text" placeholder="Jane" value={form.first} onChange={set("first")} style={errStyle(form.first)} />
            </div>
            <div className="field">
              <label>Last name</label>
              <input type="text" placeholder="Doe" value={form.last} onChange={set("last")} style={errStyle(form.last)} />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label>Email</label>
              <input type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} style={errStyle(form.email)} />
            </div>
            <div className="field">
              <label>Project type</label>
              <select value={form.type} onChange={set("type")}>
                {projectTypes.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project, timeline and goals…"
              value={form.message}
              onChange={set("message")}
              style={errStyle(form.message)}
            />
          </div>
          <button className="btn btn-primary submit" type="submit" disabled={sending}>
            {sending ? "Sending…" : sent ? "Message sent ✓" : (<>Send message <IconSend className="ico" /></>)}
          </button>
          <div className={noteOk ? "form-note ok" : "form-note"}>{note}</div>
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
            <span className="avail"><span className="dot" />Available for new work</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
