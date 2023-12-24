import React, { useEffect, useState, useContext, useRef } from 'react';
import { LetterContext } from '../helper/LetterContext';

function CharacterRow({ isCustom }) {
  const [imageSequence, setImageSequence] = useState([]);
  const [characterSequence, setCharacterSequence] = useState([]);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayFadeIn, setDisplayFadeIn] = useState(true);
  const { characterMap, setCharacterMap } = useContext(LetterContext);
  const caretRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();

      if (key === 'BACKSPACE') {
        e.preventDefault();
        if (characterSequence.length > 0) {
          setCharacterSequence((prev) => prev.slice(0, -1));
          setImageSequence((prev) => prev.slice(0, -1));
        }
      } else {
        const imageUrl = characterMap[key];
        if (imageUrl) {
          setImageSequence((prev) => [...prev, imageUrl]);
          setCharacterSequence((prev) => [...prev, key]);
          caretRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          setDisplayWarning(true);
          setTimeout(() => {

          }, 750)
          setDisplayFadeIn(false);
          setTimeout(() => {
            setDisplayWarning(false);
          }, 750)
        }
      }

    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }

  }, [characterMap, imageSequence]);

  const renderedImages = imageSequence.map((imageUrl, index) => (
    <img key={index} src={imageUrl} alt={`Image ${index}`} width={50} height={50} />
  ));

  const renderedCharacters = characterSequence.map((char, index) => (
    <div key={index} className='box'> {char} </div>
  ))

  return (
    <div>
      {displayWarning ? <div className={`text-red-500 font-bold h-screen w-screen warning ${displayFadeIn ? 'fade-in' : 'fade-out'}`}> Doodle for this character has not been set!</div> : null}
      <div className='word-box flex flex-row flex-wrap p-4 overflow-auto whitespace-nowrap'>
        {isCustom ? renderedImages : renderedCharacters}
        <span ref={caretRef} className='caret rounded'>&nbsp;</span>
      </div>
    </div>
  )
}

export default CharacterRow