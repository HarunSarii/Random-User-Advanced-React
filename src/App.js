import './App.css';
import Card from './components/Card';
import CW from './assets/cw.svg';

function App() {
  return (
    <div className="App">
      <img className="cw-header" src={CW} alt="" />
      <Card></Card>
    </div>
  );
}

export default App;
