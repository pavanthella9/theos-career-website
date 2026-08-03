"use client";

import { FormEvent, useState } from "react";
import { site } from "../lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Hello ${site.name},`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Interest: ${data.get("interest")}`,
      `Destination: ${data.get("destination")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    setStatus("Opening WhatsApp with your enquiry…");
    window.open(`https://wa.me/${site.phoneLink.replace("+", "")}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input name="name" required aria-label="Full name" placeholder="Full name" />
      <input name="phone" required aria-label="Phone number" placeholder="Phone / WhatsApp number" />
      <input name="email" required aria-label="Email" type="email" placeholder="Email address" />
      <select name="interest" required aria-label="Service" defaultValue="">
        <option value="" disabled>What do you need?</option>
        <option>IT Training</option><option>Non-IT Training</option><option>Placement Assistance</option><option>Employer Hiring Support</option>
      </select>
      <select name="destination" required aria-label="Preferred destination" defaultValue="">
        <option value="" disabled>Preferred destination</option>
        <option>India</option><option>Singapore</option><option>Malaysia</option>
      </select>
      <textarea name="message" required aria-label="Message" placeholder="Tell us about your career goal" rows={5} />
      <button type="submit" className="button">Submit on WhatsApp</button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
