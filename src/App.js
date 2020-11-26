import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">
          <img src={clock} className="jam"></img>Simple Countdown<img src={clock} className="jam"></img>
        </p>
      </header>
      <div>
      <img src={uparrow} className="arrow1"></img>
        <img src={uparrow} className="arrow2"></img>
        <img src={downarrow} className="arrow3"></img>
        <img src={uparrow} className="arrow4"></img>
        <img src={downarrow} className="arrow5"></img>
        <img src={downarrow} className="arrow6"></img>
      </div>
    </div>
  );
}

export default App;
