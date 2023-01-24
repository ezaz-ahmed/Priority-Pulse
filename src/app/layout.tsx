import { Jost } from '@next/font/google';

import Header from '@components/Header'
import Meta from '@components/Meta'

const jost = Jost({
  weight: '700',
  subsets: ['latin'],
  style: 'normal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jost.className}>
      <head>
        <Meta />
      </head>
      <Header />
      <body>{children}</body>
    </html>
  )
}
