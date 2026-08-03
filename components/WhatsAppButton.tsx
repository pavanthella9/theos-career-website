import { MessageCircle } from "lucide-react";
import { site } from "../lib/site";

export default function WhatsAppButton() {
  const url = `https://wa.me/${site.phoneLink.replace("+", "")}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return <a className="whatsapp-float" href={url} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>;
}
