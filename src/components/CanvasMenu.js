import { useState } from 'react'
import Canvas from "./Canvas";

function CanvasMenu({ character, onClose }) {

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    console.log("closing");
    setIsVisible(false);

    // allow time for the fade-out animation to occur
    setTimeout(() => {
      onClose();
    }, 750);
  };

  return (
    <div className={`overlay ${isVisible ? 'fade-in' : 'fade-out'} flex items-center justify-center`}>
      <div className='w-fit h-fit p-8 ash-gray flex flex-col rounded'>
        <div className='flex flex-row space-x-40'>
          <div className='font-bold'> Editing character mapping to the letter {character}</div>
          <button onClick={handleClose}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <Canvas character={character} />
      </div>
    </div>
  )
}

export default CanvasMenu