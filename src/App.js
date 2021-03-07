import './App.css';
import "./components/FontawesomeIcons/FontawesomeIcon";
import Navigation from './components/Navigations/Navigation';
import Header from './components/Headers/Header';
import About from './components/Abouts/About';
import Consultation from './components/Consultations/Consultation';
import OurService from './components/OurServices/OurService';
import Description from './components/Descriptions/Description';
import Contact from './components/Contacts/Contact';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <About></About>
      <Consultation></Consultation>
      <OurService></OurService>
      <Description></Description>
      <Contact></Contact>
    </div>
  );
}

export default App;
