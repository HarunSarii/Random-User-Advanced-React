import './App.css';
import Card from './components/Card';
import CW from './assets/cw.svg';
import footerLogo from './assets/design.svg';

function App() {
  return (
    <div className="App">
      <img className="cw-header" src={CW} alt="" />
      <Card></Card>
      <div className="footer">
        <span className="code">{'<ed8en/>'}</span>{' '}
        <img src={footerLogo} alt="" /> <span>design</span>
      </div>
    </div>
  );
}

export default App;
