import React, { useEffect, useState, useContext } from 'react'
import { LetterContext } from '../helper/LetterContext';
import CanvasMenu from './CanvasMenu';

function Key({ character }) {
  const { pressedKey, setPressedKey } = useContext(LetterContext);
  const [openCanvasMenu, setOpenCanvasMenu] = useState(false);

  const handleKeyDown = (e) => {
    setPressedKey(e.key.toUpperCase());
  }

  const handleKeyUp = (e) => {
    setPressedKey("");
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    setOpenCanvasMenu(true);
  }

  const onClose = () => {
    setOpenCanvasMenu(false);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  })

  return (
    <div>
      {openCanvasMenu ? <CanvasMenu character={character} onClose={onClose} /> : null}
      <button onContextMenu={handleRightClick} className={`text-color font-bold bone rounded p-2 ${character == "SPACE" ? 'w-full px-36' : 'w-12'} h-12 key-button ${(character === pressedKey || (pressedKey === ' ' && 'SPACE' == character)) ? 'pressed' : ''}`}>
        {character}
      </button>
    </div>
  )
}

export default Key

//