// imports
import { Manrope } from '@next/font/google';

// font
const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
