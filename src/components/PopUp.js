import React, { useState } from 'react'

function PopUp({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    console.log("closing")
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`overlay ${isVisible ? 'fade-in' : 'fade-out'} flex items-center justify-center`}>
      Penis
      <button onClick={handleClose}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6"></svg></button>
    </div>
  )
}

export default PopUp