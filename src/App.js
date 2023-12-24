import { useState } from 'react';
import Home from "./components/Home";
import { LetterContext } from "./helper/LetterContext";
import './App.css'
import './index.css'

function App() {
  const initMap = {}
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    initMap[letter] = '';
  }


  const [characterMap, setCharacterMap] = useState(initMap);
  const [pressedKey, setPressedKey] = useState('');

  return (
    <div className="root h-screen w-screen overflow-auto word-box">
      <LetterContext.Provider value={{ characterMap, setCharacterMap, pressedKey, setPressedKey }}>
        <Home />
      </LetterContext.Provider>

    </div>
  );
}

export default App;
