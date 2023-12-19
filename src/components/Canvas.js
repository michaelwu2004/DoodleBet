import { useOnDraw } from './Hooks'
const Canvas = ({ width, height }) => {

  const setCanvasRef = useOnDraw(onDraw);

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
    <canvas
      width={width}
      height={height}
      style={canvasBorder}
      ref={setCanvasRef}
    />
  )
}

export default Canvas;

const canvasBorder = {
  border: '1px solid black'
}