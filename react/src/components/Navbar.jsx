import * as React from 'react';

export function Navbar ({ children }) {
  return (
    <nav className="">
      <div className="">
        <ul className="">
          {children}
        </ul>
      </div>
    </nav>
  );
}

export function NavbarItem ({ children }) {
  return (
    <li className="">
      {children}
    </li>
  );
}
