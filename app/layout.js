import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "XpreX | Next-Gen Experience",
  description: "Built for speed and premium aesthetics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
