// import { useEffect } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { useTelegram } from './hooks/useTelegram';
import { Header } from './components/Header/Header';




function App() {
  // const {tg, onToggleButton} = useTelegram()

  // useEffect(() => {
  //   const initData = tg.initData;
  //   if (initData) {
  //     // const startParams = JSON.parse(initData);
  //     alert(initData)
  //     // use the data as needed in your React app
  //   }
  // }, [tg]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    alert(urlParams)
  })


  return (
    <div className="App">
      <h1>App work!</h1> <br/>
      <Header/>
      <button>toggle</button>
    </div>
  );
}

export default App;
