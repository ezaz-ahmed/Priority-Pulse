import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className=' text-4xl stroke-teal-900'>
      Hey bro
    </h1>
  )
}
