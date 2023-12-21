import { useEffect, useContext, useState } from 'react';
import { LetterContext } from '../helper/LetterContext';
import { useOnDraw } from './Hooks'
const Canvas = ({ character, width, height }) => {
  const [dataUrl, setDataUrl] = useState("");

  const { characterMap, setCharacterMap } = useContext(LetterContext);
  const { setCanvasRef, canvasRef } = useOnDraw(onDraw);

  const updateCharacter = (letter, newValue) => {
    setCharacterMap((prevMap) => ({
      ...prevMap,
      [letter]: newValue,
    }));
  };

  const handleSaveButtonClick = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const newDataUrl = canvas.toDataURL();
      setDataUrl(newDataUrl)
      updateCharacter(character, newDataUrl);
    }
  };

  const handleClearButtonClick = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      setDataUrl(""); // Clear the dataUrl as well if needed
      updateCharacter(character, ""); // Clear the character image data
    }
  };

  useEffect(() => {
    console.log(characterMap);
  }, [characterMap])

  function onDraw(c, pt, prevPt) {
    drawLine(prevPt, pt, c, '#000000', 5);
    c.fillStyle = '#000000'
    c.beginPath();
    c.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
    c.fill();
  }

  function drawLine(st, end, ctx, clr, width) {
    st = st ?? end;
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = clr;
    ctx.moveTo(st.x, st.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  }

  return (

    <div className='flex flex-col'>
      <div className='flex flex-col pt-3 space-y-5'>
        <canvas
          width={width}
          height={height}
          style={canvasBorder}
          ref={setCanvasRef}
        />
        <div className='flex flex-row space-x-1'>
          <button className='indigo-dye w-full h-fit p-3 key-button rounded' onClick={handleSaveButtonClick}> Save </button>
          <button className='indigo-dye w-full h-fit p-3 key-button rounded' onClick={handleClearButtonClick}> Clear </button>
        </div>

      </div>
      <div className='font-bold pt-2'> Preview: </div>
      {characterMap[character] === "" ? <div> nuthing </div> : <img src={dataUrl} width={50} height={50} />}
    </div>
  )
}

export default Canvas;

const canvasBorder = {
  border: '1px solid black'
}