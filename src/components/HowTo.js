import React, { useState } from 'react'

function HowTo({ onClose }) {

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
    <div className={` overlay ${isVisible ? 'fade-in' : 'fade-out'} flex items-center justify-center`}>
      <div className='w-fit h-fit p-8 bone flex flex-col rounded'>
        <div className='flex flex-row space-x-28'>
          <div className='font-bold'> How to use DoodleBet </div>
          <button onClick={handleClose}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <ol>
          <li>Step 1: Right any key on the keyboard</li>
          <li>Step 2: Create a doodle for the key</li>
          <li>Step 3: Save it</li>
          <li>Step 4: Type the letter</li>
        </ol>
      </div>
    </div>
  )
}

export default HowTo