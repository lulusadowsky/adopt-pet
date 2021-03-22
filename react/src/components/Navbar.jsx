import * as React from 'react';

export function Navbar () {
  return (
    <nav className="">
      <div className="">
        <ul className="">
          <NavbarItem name="Home" link="/home"/>
          <NavbarItem name="Adopt" link="/adopt"/>
          <NavbarItem name="Host" link="/host"/>
          <NavbarItem name="Sponsor" link="/sponsor"/>
          <NavbarItem name="About" link="/about"/>
          <NavbarItem name="Contact" link="/contact"/>
        </ul>
      </div>
    </nav>
  );
}

function NavbarItem (props) {
  const { name, link } = props;
  return (
    <li className="">
      <a className="" href="#">{name}</a>
    </li>
  );
}
