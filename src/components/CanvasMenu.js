import React from 'react'
import Canvas from "./Canvas";

function CanvasMenu({ character, onClose }) {
  return (
    <div className='overlay flex items-center justify-center'>
      <div className='w-fit h-fit p-8 ash-gray flex flex-col'>
        <div className='flex flex-row space-x-40'>
          <div> Editing character mapping to the letter {character}</div>
          <button onClick={onClose}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
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