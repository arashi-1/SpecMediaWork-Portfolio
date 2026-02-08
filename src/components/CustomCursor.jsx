import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  // Track mouse
  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Global hover detection (SPA-safe)
  useEffect(() => {
    const onMouseOver = (e) => {
      if (e.target.closest("a, button")) {
        setHover(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest("a, button")) {
        setHover(false);
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hover ? "cursor-hover" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
