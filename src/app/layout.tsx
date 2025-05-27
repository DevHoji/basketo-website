import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basketo Engine - Game Development Made Easy',
  description: 'Basketo Engine is a free, open-source game engine that combines AI with traditional game development tools to streamline your workflow.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-basketo-darker text-white">{children}</body>
    </html>
  );
}
