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
  //console.log(initMap);
  const [characterMap, setCharacterMap] = useState(initMap);
  //console.log(characterMap);

  return (
    <div className="root h-screen w-screen">
      <LetterContext.Provider value={{ characterMap, setCharacterMap }}>
        <Home />
      </LetterContext.Provider>

    </div>
  );
}

export default App;
