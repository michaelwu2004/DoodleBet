import React, { useEffect, useState, useContext } from 'react';
import { LetterContext } from '../helper/LetterContext';
import KeyBoard from './Keyboard';
import Canvas from "./Canvas";


function Home() {

  return (
    <div className=''>
      <h1 className="text-7xl text-center text-blue-400"> Home </h1>
      <Canvas width={200} height={200} />
      <CharacterRow />
    </div>
  )
}

function CharacterRow() {
  const [imageSequence, setImageSequence] = useState([]);
  const { characterMap, setCharacterMap } = useContext(LetterContext);

  useEffect(() => {
    console.log("characterRow")
    const handleKeyPress = (e) => {
      console.log("Key pressed")
      const key = e.key.toUpperCase();
      //console.log(key);
      const imageUrl = characterMap[key];
      console.log(characterMap);
      console.log("url", imageUrl);
      if (imageUrl) {
        console.log("WE GOT A URL FOR THIS KEY")
        setImageSequence((prev) => [...prev, imageUrl]);
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

  return (
    <div className='flex flex-row w-screen'>
      {renderedImages}
    </div>
  )
}



export default Home