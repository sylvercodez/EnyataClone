import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
 
  { text: "About Us", href: "/about" },
  { text: "Case study", href: "/case-study" },
  { text: "Academy", href: "/academy" },
  { text: "Community", href: "/community" },
  { text: "Contact Us", href: "/contact-us" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="bg-white">
      <nav className={`nav`}>
        <Link href={"/"}>
       
            <h1 className="logo"><Image
        src="/Logo.svg"
        alt="Enyata logo"
         width={0}
  height={0}
  sizes="100vw"
  style={{ width: '130px', height: 'auto' }}
      /></h1>
        
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;