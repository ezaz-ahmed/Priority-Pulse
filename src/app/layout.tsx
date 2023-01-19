import { Manrope } from '@next/font/google';
import "@styles/globals.css"
import Meta from '@components/Meta/Meta';

const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <Meta />
      </head>
      <body>{children}</body>
    </html>
  )
}
