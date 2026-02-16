"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import HomeLogoLink from "@/components/shared/HomeLogoLink";

type ApiSuccess = {
  message: string;
  id: string;
};

type ApiError = {
  message: string;
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as ApiError;
        throw new Error(payload.message || "Failed to submit. Please try again.");
      }

      const payload = (await response.json()) as ApiSuccess;
      setStatus("success");
      setStatusMessage(payload.message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-8 text-zinc-900 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
        <div className="mb-5 flex justify-center">
          <HomeLogoLink />
        </div>

        <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Back to home
        </Link>

        <h1 className="mt-4 text-3xl font-light sm:text-4xl">Contact Hailey</h1>
        <p className="mt-2 max-w-xl text-sm text-zinc-600 sm:text-base">
          Send your message and it will be saved in Firebase. Email automation can be added later.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="md:col-span-2 w-fit rounded-full bg-pink-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status !== "idle" && (
            <p
              className={`md:col-span-2 text-sm ${
                status === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
