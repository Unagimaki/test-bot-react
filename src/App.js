// import { useEffect } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { useTelegram } from './hooks/useTelegram';




function App() {
  const data = 'score=grammar%3A5%2Crelevance%3A5%2Cterminology%3A5';

  // Удалить слово "score" из строки
  const newData = data.replace('score=', '');
  
  // Разбить строку на массив параметров
  const params = newData.split('%2C');
  console.log(params);
  
  // Цикл по параметрам и извлечение слова и числа
  params.forEach(param => {
    const [word, number] = param.split('%3A');
    console.log(`Word: ${word}, Number: ${decodeURIComponent(number)}`);
  });  
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search)
  }, []);

  return (
    <div className="App">
      <ul className='ul'>
        <li>Grammar:  <br/> <div className='line'></div> </li>
        <li>Relevance: <div className='line'></div></li>
        <li>Terminology: <div className='line'></div></li>
      </ul>
    </div>
  );
}

export default App;
