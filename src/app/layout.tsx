// src/app/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oceanes",
  description: "Oceanes project Global Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
