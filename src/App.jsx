
import { NavLink } from 'react-router-dom';
import Navbar from './component/Navbar';

import Service from './component/Service';
import Footer from './component/Footer';
import { useState } from 'react';
import Osago from './page/osago/GetInsurence';
import GetAccidentInsur from './page/accident/GetAccidentInsur';

function App() {

  const [service, setService] = useState('osago');


  return (
    <>
    <Navbar />
    {service === "osago" && <Osago />}
    {service === "accident" && <GetAccidentInsur />}
    <Service />
    <Footer />
    </>
  )
}

export default App
