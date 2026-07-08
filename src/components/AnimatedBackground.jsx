import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            "--size": `${40 + Math.random() * 180}px`,
            "--left": `${Math.random() * 100}%`,
            "--duration": `${10 + Math.random() * 15}s`,
            "--delay": `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;