import Toolbar from './components/Toolbar/Toolbar.js'
import Typewriter from 'typewriter-effect';
import './App.css'

function App() {
  return (
    <>
    <div className="intro-desc"><Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Researcher').pauseFor(4500).deleteAll().typeString('Programmer').pauseFor(4500).deleteAll().typeString('Guitarist').pauseFor(4500).deleteAll().typeString('Student').pauseFor(4500).deleteAll().start()
  }}
  options={{
      delay:50,
    deleteSpeed:50,
  }}
/></div>
    <div className="App">
      <Toolbar/>
    </div>
    </>

  );
}

export default App;
