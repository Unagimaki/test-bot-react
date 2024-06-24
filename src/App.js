import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Header } from './components/Header/Header';




function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [tg])
  useEffect(() => {
    const startParams = new URLSearchParams(window.location.search);
    const foo = startParams.get('foo');
    alert(foo)
  }, []);

  return (
    <div className="App">
      <h1>App work!</h1> <br/>
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
