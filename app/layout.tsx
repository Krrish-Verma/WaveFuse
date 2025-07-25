import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'DJ Mixer - Create Seamless Mixes',
  description: 'Import your music, arrange playlists, and create seamless mixes with beat matching and real-time collaboration.',
  keywords: 'DJ, mixer, playlist, music, spotify, collaboration, mixing',
  authors: [{ name: 'DJ Mixer Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
} 