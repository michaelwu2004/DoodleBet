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

  const handleButtonClick = () => {
    console.log("button clicked");
    if (canvasRef.current) {
      console.log("reference to canvas established")
      const canvas = canvasRef.current;
      const newDataUrl = canvas.toDataURL();
      setDataUrl(newDataUrl)
      console.log("url", newDataUrl);
      updateCharacter('A', newDataUrl);
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
      <div className='flex flex-row m-10 space-x-10'>
        <canvas
          width={width}
          height={height}
          style={canvasBorder}
          ref={setCanvasRef}
        />
        <button className='indigo-dye w-12 h-12 key-button' onClick={handleButtonClick}> HI </button>
      </div>
      <img src={dataUrl} width={100} height={100} />
    </div>
  )
}

export default Canvas;

const canvasBorder = {
  border: '1px solid black'
}