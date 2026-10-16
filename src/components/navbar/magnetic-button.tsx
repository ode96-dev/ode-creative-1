"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  strength = 0.35,
  className = "",
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);

  const [{ pos }, api] = useSpring(() => ({
    pos: [0, 0],
    config: { mass: 0.8, tension: 320, friction: 22 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    api.start({ pos: [distanceX, distanceY] });
  };

  const handleMouseLeave = () => {
    api.start({ pos: [0, 0] });
  };

  return (
    <animated.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: pos.to(
          (xVal, yVal) => `translate3d(${xVal}px, ${yVal}px, 0)`,
        ),
      }}
      className={`relative inline-flex items-center justify-center will-change-transform cursor-pointer select-none ${className}`}
      {...props}
    >
      {children}
    </animated.button>
  );
}
