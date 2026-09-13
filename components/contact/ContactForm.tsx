"use client";

import { useState } from "react";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validateContactForm";

type SubmitState = "idle" | "submitting" | "success" | "error";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

export function ContactForm({ endpoint }: { endpoint: string | null }) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitState>("idle");

  if (!endpoint) {
    return (
      <p className="opacity-70">
        The contact form isn&apos;t configured yet — reach out directly using the links below.
      </p>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch(endpoint as string, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className="glass-card rounded-xl px-4 py-2 outline-none"
        />
        {errors.name ? <span className="text-xs text-red-400">{errors.name}</span> : null}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          className="glass-card rounded-xl px-4 py-2 outline-none"
        />
        {errors.email ? <span className="text-xs text-red-400">{errors.email}</span> : null}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="glass-card rounded-xl px-4 py-2 outline-none"
        />
        {errors.message ? <span className="text-xs text-red-400">{errors.message}</span> : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="gradient-border-glow glass-card rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p role="status" className="text-sm text-emerald-400">
          Thanks — your message is in! I&apos;ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending that. Try again, or email me directly.
        </p>
      ) : null}
    </form>
  );
}
