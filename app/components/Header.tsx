// src/components/Header.jsx
import Link from 'next/link';
import { headerData } from '../data/headerData';
import type { JSX } from 'react';

function Header(): JSX.Element {
  return (
    <header id="header">
      <Link href={headerData.logo.link} className="logo">
        <strong>{headerData.logo.title}</strong> {headerData.logo.subTitle}
      </Link>
      <ul className="icons">
        {headerData.social.map((social: { id: string; link: string; icon: string }) => (
          <li key={social.id}>
            <a href={social.link} className={`icon brands ${social.icon}`}>
              <span className="label">{social.id.charAt(0).toUpperCase() + social.id.slice(1)}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;