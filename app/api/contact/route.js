// Contact-form email delivery via Resend (https://resend.com).
//
// Required env var — set in `.env.local` for local dev, and in
// Vercel → Project → Settings → Environment Variables for production:
//   RESEND_API_KEY   your Resend API key (server-side only; never commit it)
//
// Optional:
//   CONTACT_TO       recipient (defaults to viethq00@gmail.com)
//   CONTACT_FROM     verified sender. Defaults to Resend's shared test sender,
//                    which only delivers to your own Resend-account email until
//                    you verify a domain. After verifying a domain in Resend,
//                    set e.g. "VietHQ <hello@yourdomain.com>".

const TO = process.env.CONTACT_TO || "viethq00@gmail.com";
const FROM = process.env.CONTACT_FROM || "VietHQ Portfolio <onboarding@resend.dev>";

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const firstname = (data.firstname || "").trim();
  const lastname = (data.lastname || "").trim();
  const email = (data.email || "").trim();
  const service = (data.service || "").trim();
  const message = (data.message || "").trim();

  if (!firstname || !lastname || !email || !message) {
    return Response.json(
      { ok: false, error: "Please fill in the required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Email service not configured." },
      { status: 500 }
    );
  }

  const name = `${firstname} ${lastname}`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Portfolio enquiry — ${name}${service ? ` · ${service}` : ""}`,
        text: `New message from your portfolio contact form\n\nName:  ${name}\nEmail: ${email}\nType:  ${service || "—"}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, detail);
      return Response.json({ ok: false, error: "Could not send your message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ ok: false, error: "Could not send your message." }, { status: 502 });
  }
}
