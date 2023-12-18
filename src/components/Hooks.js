import { useRef } from "react";

export function useOnDraw(onDraw) {

  const canvasRef = useRef(null);

  const isDrawingRef = useRef(false);

  function setCanvasRef(ref) {
    if (!ref) return;
    canvasRef.current = ref;
    initMouseMoveListener();
    initMouseDownListener();
    initMouseUpListener();
  }

  function initMouseMoveListener() {
    const mouseMoveListener = (e) => {
      if (isDrawingRef.current) {
        const point = pointRelativeToCanvas(e.clientX, e.clientY);
        const context = canvasRef.current.getContext('2d');
        if (onDraw) onDraw(context, point);
        console.log(point);
      }
    }
    window.addEventListener("mousemove", mouseMoveListener);
  }

  function initMouseDownListener() {
    if (canvasRef.current) {
      const listener = () => {
        isDrawingRef.current = true;
      }
      canvasRef.current.addEventListener("mousedown", listener)
    }
  }

  function initMouseUpListener() {
    if (canvasRef.current) {
      const listener = () => {
        isDrawingRef.current = false;
      }
      canvasRef.current.addEventListener("mouseup", listener)
    }
  }

  function pointRelativeToCanvas(clientX, clientY) {
    if (canvasRef.current) {
      const bounds = canvasRef.current.getBoundingClientRect()
      return {
        x: clientX - bounds.left,
        y: clientY - bounds.top
      }
    }
    return null
  }

  return setCanvasRef;
}