import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import MainVideo from './components/MainVideo';
import Suggestions from './components/Suggestions';
function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className='parent'>
      <MainVideo/>
      <Suggestions/>
    </div>
    </div>
  );
}

export default App;
