import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp



function App() {
  useEffect(() => {
    tg.ready()
  }, [])
  const closeHandler = () => {
    tg.close()
  }
  return (
    <div className="App">
      <h1>App work!</h1> <br/>
      <button onClick={closeHandler}>Закрыть</button>
    </div>
  );
}

export default App;
