import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';
import Skill from './components/Skill/Skill';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skill></Skill>
      <Service></Service>
    </div>
  );
}

export default App;
