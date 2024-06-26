// import { useEffect } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { useTelegram } from './hooks/useTelegram';
import { Header } from './components/Header/Header';




function App() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(parseInt(urlParams))
    const grammar = parseInt(urlParams.get('score(grammar)'));
    const relevance = parseInt(urlParams.get('score(relevance)'));
    const terminology = parseInt(urlParams.get('score(terminology)'));
  
    alert(`grammar: ${grammar}, relevance: ${relevance}, terminology: ${terminology}`);
  }, []);

  return (
    <div className="App">
      <h1>App work!</h1> <br/>
      <Header/>
      <button>toggle</button>
    </div>
  );
}

export default App;
