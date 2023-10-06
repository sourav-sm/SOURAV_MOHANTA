import './App.scss';
import { Routes, Route ,useLocation} from 'react-router-dom';
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles";
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contacts from './containers/contacts';
import Navbar from './compnents/navBar';
import particles from "./utils.js/particles";

function App() {
  const location =useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage=location.pathname==="/";
  return (
    <div className="App">
      {renderParticleJsInHomePage && 
        (<Particles id="particles" options={particles} init={handleInit}/>
        ) }

      <Navbar/>

      <div className="App_main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
