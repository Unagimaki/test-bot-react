import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Header } from './components/Header/Header';




function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    const initData = tg.initData;
    if (initData) {
      const startParams = JSON.parse(initData);
      const foo = startParams.foo;
      const baz = startParams.baz;
      alert(startParams)
      // use the data as needed in your React app
    }
  }, [tg]);


  return (
    <div className="App">
      <h1>App work!</h1> <br/>
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
