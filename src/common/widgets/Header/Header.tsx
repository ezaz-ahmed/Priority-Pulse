"use client"
import { socialData } from '@widgets/Socials/config/constans'
import Link from 'next/link'
import AnimatedTextCharacter from '@components/motion/AnimatedTextCherecter'
import Button from '@components/Button'




const Header = () => {
  return (
    <header className="top-0 w-full z-50 pt-4 max-w-[94%] mx-auto md:block right-0 left-0 hidden align-middle sticky backdrop-blur ">
      <div className='flex items-center justify-between'>
        <nav className="w-4/12 flex">
          {socialData.map((item, i) => (
            <Link
              key={i}
              target="__blank"
              href={item.url}
              className=' text-2xl mx-3  ml-0 text-slate-400 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-sky-500 duration-300'
            >
              <item.icon aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className='w-4/12 flex justify-center'>
          <Link href='/' className='flex' >
            <AnimatedTextCharacter
              text='E'
              className='text-4xl font-semibold text-sky-700'
            />
            <AnimatedTextCharacter
              text='ZAZ'
              className='text-4xl text-slate-700/80'
            />
          </Link>
        </div>


        <div className="w-4/12 flex justify-end">
          <Link href='/' target='__blank' > <Button > Resume </Button> </Link>
        </div>
      </div>





    </header>
  )
}

export default Header