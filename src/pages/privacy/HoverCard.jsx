import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './hovercard.scss'; // Import the external SCSS file

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 360,
  (x - window.innerWidth / 2) / 240,
  1.02,
];

const trans = (x, y, s) =>
  `perspective(900px) rotateX(${-x}deg) rotateY(${-y}deg) scale(${s})`;

const HoverCard = ({ children, backgroundColor, direction = 'left', left = '0' }) => {
  const [hovered, setIsHovered] = useState(false);
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 6000, friction: 1000 },
  }));

  useEffect(() => {
    const handleMousePosition = (event) => {
      const { clientX: x, clientY: y } = event;
      set({ xys: calc(x, y) });
      setIsHovered(true);
    };

    window.addEventListener('mousemove', handleMousePosition);

    return () => {
      window.removeEventListener('mousemove', handleMousePosition);
    };
  }, []);

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
    setIsHovered(false);
  };

  return (
    <animated.div
      className="hover-card-wrapper"
      onMouseLeave={handleMouseLeave}
      style={{ transform: springProps.xys.to(trans) }}
    >
      <div className={`hover-card-content ${direction}`}>
        {children}
        <div
          className={`hover-card-background ${hovered ? 'hovered' : ''}`}
          style={{
            backgroundColor,
            left,
          }}
        />
      </div>
    </animated.div>
  );
};

export default HoverCard;
