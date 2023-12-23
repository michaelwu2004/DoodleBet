import React from 'react';
import KeyBoard from './Keyboard';
import CharacterRow from './CharacterRow';
import NavBar from './NavBar';

function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <NavBar />
      <div className='text-color font-bold'> Pseudo-english language</div>
      <div className='flex flex-col w-11/12 h-64 bone rounded'>
        <CharacterRow isCustom={true} />
      </div>
      <div className='h-8' />
      <div className='text-color font-bold'> Translation </div>
      <div className='flex flex-col w-11/12 h-64 bone rounded'>
        <CharacterRow isCustom={false} />
      </div>
      <KeyBoard />
    </div>
  )
}

//<h1 className="text-7xl text-center text-blue-400"> Home </h1>

export default Home