"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface SpringTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
}

export default function SpringTiltCard({
  children,
  className = "",
  maxTilt = 8,
  scaleOnHover = 1.02,
}: SpringTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [{ xys }, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 280, friction: 20 },
  }));

  const calc = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = (clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const y = -(clientX - rect.left - rect.width / 2) / (rect.width / 2);
    return [-x * maxTilt, y * maxTilt, scaleOnHover];
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    api.start({ xys: calc(e.clientX, e.clientY, rect) });
  };

  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: xys.to(
          (x, y, s) =>
            `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(${s}, ${s}, 1)`,
        ),
      }}
      className={`will-change-transform transform-gpu transition-shadow duration-300 ${className}`}
    >
      {children}
    </animated.div>
  );
}
