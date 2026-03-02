"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full h-[42px] px-4 text-sm text-fg bg-surface border border-[#3d3d3d] rounded-[8px] outline-none focus:border-accent transition-colors placeholder:text-muted"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full h-[42px] px-4 text-sm text-fg bg-surface border border-[#3d3d3d] rounded-[8px] outline-none focus:border-accent transition-colors placeholder:text-muted"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 text-sm text-fg bg-surface border border-[#3d3d3d] rounded-[8px] outline-none focus:border-accent transition-colors placeholder:text-muted resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-green-400">
          <CheckCircle2 size={16} />
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} />
          {error}
        </p>
      )}
    </form>
  );
}
