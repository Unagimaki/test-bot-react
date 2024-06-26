// import { useEffect } from 'react';
import { useEffect } from 'react';
import './App.css';
// import { useTelegram } from './hooks/useTelegram';
import { Header } from './components/Header/Header';




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
      <ul>
        <li>Grammar: 5</li>
        <li>Relevance: 5</li>
        <li>Terminology: 5</li>
      </ul>
    </div>
  );
}

export default App;
