import { useEffect, useState } from 'react';
const KeyBoard = () => {
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyDown = (e) => {
    setPressedKey(e.key.toUpperCase());
    console.log(e.key.toUpperCase());
  }

  const handleKeyUp = (e) => {
    setPressedKey("");
  }


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  })

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  const keyboard = [firstRow, secondRow, thirdRow]
  return (
    <div>
      <div> Last pressed key: {pressedKey} </div>
      <div>
        {keyboard.map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-row space-x-4 m-2 justify-center'>
            {row.map((key, keyIndex) => (
              <button key={keyIndex} className={`ash-gray rounded p-2 w-12 h-12 key-button ${key == pressedKey ? 'pressed' : ''}`}>
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyBoard