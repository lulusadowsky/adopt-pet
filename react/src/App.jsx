
import React from 'react';
import { Navbar } from './components/Navbar';

function App () {
  return (
    <>
      <Navbar />
      <ContentPicker link={link} />
    </>
  );
}

export default App;

function ContentPicker ({ link }) {
  if (link === '/home') { return <Home/>; }

  if (link === '/adopt') { return <Adopt/>; }

  return <Home/>;
}

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
