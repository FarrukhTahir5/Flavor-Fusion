import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <div className="Header">
      <Header/>
    </div>
    <div className="main-content">
      <div className="left-section">
      <div className="main-text">
      <span className="heading-main">The ONLY COOKIN'PEDIA You Need!</span><br/>
      <div className="writing-simple">Elevate Your Cooking Skills</div>
      </div>
      <button>View Recipes</button>
      </div>
      <div className="right-section">
        <img src="icon.png" alt="nah"/>
      </div>

    </div>

    </div>
  );
}

export default App;
