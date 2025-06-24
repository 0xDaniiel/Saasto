import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SaaSto",
  description: "Manage your time effectively",
  icons: {
    icon: "/images/t-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#FFF8F2] min-h-screen`}
        style={{
          backgroundImage: 'url("/images/bg2.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="px-8 max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
