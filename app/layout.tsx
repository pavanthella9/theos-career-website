import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Theos Career Consultants | Training & Placement Assistance",
    template: "%s | Theos Career Consultants",
  },
  description:
    "Industry-focused IT and non-IT training, career guidance, recruitment and ethical placement assistance across India, Singapore and Malaysia.",
  keywords: [
    "career consultants Tirupati",
    "IT training Tirupati",
    "non IT training",
    "placement assistance India",
    "Singapore career guidance",
    "Malaysia career guidance",
  ],
  openGraph: {
    title: "Theos Career Consultants",
    description:
      "Build the right skills and reach the right opportunities across India, Singapore and Malaysia.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
