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
    const initData = window.Telegram.WebApp.initData;
    const foo = initData.foo;
    const baz = initData.baz;
    alert(foo, baz); // output: bar qux
    // use the data as needed in your React app
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
