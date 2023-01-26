import { Jost } from '@next/font/google'
import '@styles/globals.css'
import Meta from '@widgets/Meta'

const jost = Jost({ weight: "700", subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body className={jost.className}>{children}</body>
    </html>
  )
}
