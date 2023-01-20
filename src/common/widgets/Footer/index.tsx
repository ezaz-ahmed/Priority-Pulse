import Link from 'next/link';
import Image from 'next/image';
import { darkLogo } from '@assets/index';

const Footer = () => {
  return (
    <footer className="header sticky bottom-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <Link href="/">
          <Image src={darkLogo} alt="dark logo" width="100" height="100" />
        </Link>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link href="">Accueil</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Produits</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Collections</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <Link href="">{/*  */}</Link>
      </div>
    </footer>
  );
};

export default Footer;
