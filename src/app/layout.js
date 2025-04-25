import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";


const brico = Bricolage_Grotesque({

});

export const metadata = {
  title: "Team .py | Paul × Yohann",
  description: "Paul and Yohann's hackathon team - Full-stack development with excellence",
  keywords: ["hackathon", "team", "python", "development", "coding"],
  authors: [
    { name: "Yohann", url: "https://your-portfolio-url.com" },
    { name: "Paul", url: "https://paul-portfolio-url.com" }
  ],
  creator: "Team .py",
  themeColor: "#1e293b", // Matches your slate-900 bg color
  openGraph: {
    title: "Team .py | Paul × Yohann",
    description: "Full-stack development excellence from Team .py",
    url: "https://teampy.com", // Replace with your actual URL
    siteName: "Team .py",
    images: [
      {
        url: "/teampy-og.png", // Create this image to represent your team
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team .py | Paul × Yohann",
    description: "Full-stack development excellence from Team .py",
    images: ["/teampy-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={brico.className }
      >
        {children}
      </body>
    </html>
  );
}
