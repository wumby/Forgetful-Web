import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forgetful • Temporary Photo Mementos',
  description:
    'Forgetful is the temporary photo memento app. Capture, expire, and relive small moments on purpose.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
