import React, { useEffect, useState, useContext } from 'react';
import { LetterContext } from '../helper/LetterContext';

function CharacterRow({ isCustom }) {
  const [imageSequence, setImageSequence] = useState([]);
  const [characterSequence, setCharacterSequence] = useState([]);
  const { characterMap, setCharacterMap } = useContext(LetterContext);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toUpperCase();
      const imageUrl = characterMap[key];
      if (imageUrl) {
        setImageSequence((prev) => [...prev, imageUrl]);
        setCharacterSequence((prev) => [...prev, key])
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

  const renderedCharacters = characterSequence.map((char) => (
    <div className='box'> {char} </div>
  ))

  return (
    <div className='flex flex-row flex-wrap '>
      {isCustom ? renderedImages : renderedCharacters}
    </div>
  )
}

export default CharacterRow