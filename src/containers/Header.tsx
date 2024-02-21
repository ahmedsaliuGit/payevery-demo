import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Hamburger from "../assets/svg/icon-hamburger.svg";
import IconClose from "../assets/svg/icon-close.svg";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="w-full py-8 px-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={Logo}
          alt="brand logo"
          width={160}
          height={75}
          className="block lg:hidden"
        />
        <img
          src={Logo}
          alt="brand logo"
          width={260}
          height={175}
          className="hidden lg:block lg:mr-8"
        />
        <div
          aria-label="Hamburger"
          className="lg:hidden"
          onClick={() => setMobileNav(!mobileNav)}
        >
          {mobileNav ? (
            <img src={IconClose} alt="Close Icon" />
          ) : (
            <img src={Hamburger} alt="Hamburger icon" />
          )}
        </div>
        <nav className="hidden lg:flex lg:items-center w-full">
          <ul className="flex lg:gap-4 text-sm text-secondary">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Why Paydestal</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className="flex items-center gap-4 text-sm text-secondary ml-auto">
            <li>
              <a href="#">Login</a>
            </li>
            <li className="bg-primary text-white px-8 py-2 rounded-full">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>

      {mobileNav && (
        <div className="relative">
          <nav
            className={`${
              mobileNav
                ? "block absolute top-0 w-full z-[1] bg-white"
                : "hidden"
            }`}
          >
            <ul className="mt-4 flex flex-col text-primary items-center justify-center justify-self-stretch pb-4">
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Services</a>
              </li>
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Developer</a>
              </li>
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Why Paydestal</a>
              </li>
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Company</a>
              </li>
              <li className="mb-2 border-b-2 border-gray-300 p-2">
                <a href="#">Support</a>
              </li>
              <li className="mt-8 border-b-2 border-gray-300 p-2">
                <a href="#">Login</a>
              </li>
              <li className="mt-4 bg-secondary text-white px-8 py-2 rounded-full">
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
