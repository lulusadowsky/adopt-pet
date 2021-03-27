
import React from 'react';
import { Navbar, NavbarItem } from './components/Navbar';
import { useRouter } from './components/router/router';
import { Link, Route, Router } from './components/router/Router';

function App () {
  const { route, setRoute } = useRouter('/home');

  return (
    <>
      <Navbar>
        <NavbarItem>
          <Link label="Home" to="/home" setRoute={setRoute}/>
        </NavbarItem>
        <NavbarItem>
          <Link label="Adopt" to="/adopt" setRoute={setRoute}/>
        </NavbarItem>
        <NavbarItem>
          <Link label="Host" to="/host" setRoute={setRoute}/>
        </NavbarItem>
        <NavbarItem>
          <Link label="Sponsor" to="/sponsor" setRoute={setRoute}/>
        </NavbarItem>
        <NavbarItem>
          <Link label="About" to="/about" setRoute={setRoute}/>
        </NavbarItem>
        <NavbarItem>
          <Link label="Contact" to="/contact" setRoute={setRoute}/>
        </NavbarItem>
      </Navbar>
      <Router current={route} fallback='/home'>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/adopt">
          <Adopt />
        </Route>
      </Router>
    </>
  );
}

export default App;

function Home () {
  return (
    <div>
      We are Home!!
    </div>
  );
}

function Adopt () {
  return (
    <div>
      We are adopting!!
    </div>
  );
}
