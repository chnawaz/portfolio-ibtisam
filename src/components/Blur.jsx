// src/components/BlurCursorImage.jsx
import { useState } from "react";
// import img from "./assets/97.png";
// import img1 from "../assets/diabticsimages/img1.png";



export default function BlurCursorImage( {img }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setCoords({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden   rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={img}
        className=" object-cover h-[395px] w-full hover:scale-105 duration-400"
      />

      {/* Blur Circle */}
      {isHovering && (
        <div
          className="pointer-events-none absolute w-32 h-32 bg-white/10 backdrop-blur-md rounded-full transition-all duration-75"
          style={{
            left: coords.x - 64,
            top: coords.y - 64,
          }}
        />
      )}
    </div>
  );
}
