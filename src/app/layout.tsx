// imports
import { Urbanist } from '@next/font/google';
//
import Mail from '@widgets/Mail';
import Glassify from '@components/Glassify';
import Header from '@widgets/Header';
import Meta from '@components/Meta/Meta'
//
import '../shared/styles/globals.css'

// font
const urbanist = Urbanist({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={urbanist.className} >
      <head>
        <Meta />
      </head>

      <body className='text-base bg-white dark:bg-emerald-700 dark:text-slate-200' >

        <Glassify />

        <Header />
        {children}

      </body>
    </html>
  )
}
