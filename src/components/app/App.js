import './App.scss';

//projects
import ESignatureApp from '../projects/01-E-Signature-App/ESignatureApp';
import RandomizeColors from '../projects/02-Randomize-Colors/RandomizeColors';
import LikeMyPhoto from '../projects/03-Like-My-Photo/LikeMyPhoto';
import Testimonials from '../projects/04-Testimonials/Testimonials';
import Alerts from '../projects/05-Alerts/Alerts';
import TemperatureController from '../projects/06-Temperature-Controller/TemperatureController';
import DarkMode from '../projects/07-Dark-Mode/DarkMode';


function App() {
  return (
    <div className="App">
      {/* <ESignatureApp /> */}
      {/* <RandomizeColors /> */}
      {/* <LikeMyPhoto /> */}
      {/* <Testimonials /> */}
      {/* <Alerts /> */}
      {/* <TemperatureController /> */}
      <DarkMode />

    </div>
  );
}

export default App;
