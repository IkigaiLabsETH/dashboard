import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dashboard",
  description:
    "dashboard with Next.js App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6 bg-gray-900 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold text-yellow-500">Crypto Dashboard</h1>
      </header>
      <main className="flex-grow p-8">
        {children}
      </main>
      <footer className="p-4 text-center bg-gray-900 text-sm">
        <p className="text-gray-400">Powered by CoinGecko API</p>
      </footer>
    </div>
  );
};

