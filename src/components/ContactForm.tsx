import React from "react";
import { FormEvent, useState } from "react";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please try again or email directly.");
    }
  }

  console.log("CONTACT_ENDPOINT =", CONTACT_ENDPOINT);

  return (
    <form
      onSubmit={handleSubmit}
      className="card mt-6 space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
          Name
        </label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
          What do you need help with?
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-400">
          Got it — I’ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">
          {error} Or email{" "}
          <a href="mailto:michael@assist.wtf" className="underline">
            [michael@assist.wtf]
          </a>
          .
        </p>
      )}
    </form>
  );
}

export default ContactForm;
