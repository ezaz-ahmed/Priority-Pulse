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
              href={item.url}
              className=' text-2xl mx-3  ml-0 text-slate-400 hover:text-sky-400 cursor-pointer transition-all duration-300 hover:bor'
            >
              <item.icon aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className='w-4/12 flex justify-center'>
          <Link href='/' className='flex' >
            <AnimatedTextCharacter
              text='Ezaz'
              className='text-4xl font-semibold text-sky-700 mr-2'
            />
            <AnimatedTextCharacter
              text='Ahmed'
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