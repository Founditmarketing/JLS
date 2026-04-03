import { useCustomCursor } from '../../hooks/useCustomCursor';
import './CustomCursor.css';

export default function CustomCursor() {
  useCustomCursor();
  return (
    <>
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
}
