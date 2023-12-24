import React, { useState } from 'react'
import HowTo from './HowTo';

function NavBar() {

  const [openHowTo, setOpenHowTo] = useState(false);

  const onOpen = () => {
    setOpenHowTo(true);
  }

  const onClose = () => {
    setOpenHowTo(false);
  }

  return (
    <div className='flex flex-col items-center m-2'>
      <div className='text-color font-bold text-6xl'>
        DoodleBet
      </div>

      <div>
        <button className='key-button text-color bone w-fit h-fit p-2 rounded font-bold' onClick={onOpen}>How to use</button>
      </div>

      {openHowTo ? <HowTo onClose={onClose} /> : null}
    </div>
  )
}

export default NavBar