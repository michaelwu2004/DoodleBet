import React, { useEffect, useState, useContext } from 'react';
import { LetterContext } from '../helper/LetterContext';
import Key from './Key';
const KeyBoard = () => {

  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayFadeIn, setDisplayFadeIn] = useState(true);
  const { characterMap, setCharacterMap } = useContext(LetterContext);

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const keyboard = [firstRow, secondRow, thirdRow]

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();

      if (key === 'BACKSPACE') {

      } else {
        const imageUrl = characterMap[key];
        if (!imageUrl) {
          setDisplayWarning(true);
          setTimeout(() => {

          }, 750)
          setDisplayFadeIn(false);
          setTimeout(() => {
            setDisplayWarning(false);
          }, 750)
        } else {

        }
      }

    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }

  }, []);

  return (
    <div className='w-full'>
      <div className='h-10 '>
        {displayWarning ? (
          <div className='flex justify-center items-center h-full'>
            <div className={`text-red-500 font-bold ${displayFadeIn ? 'fade-in' : 'fade-out'}`}>
              Doodle for this character has not been set!
            </div>
          </div>
        ) : null}

      </div>
      <div>
        {keyboard.map((row, idx) => (
          <div key={idx} className='flex flex-row space-x-4 m-2 justify-center'>
            {row.map((key, kidx) => (
              <Key key={kidx} character={key} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyBoard