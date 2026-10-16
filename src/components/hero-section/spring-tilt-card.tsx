"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface SpringTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
}

export default function SpringTiltCard({
  children,
  className = "",
  maxTilt = 7,
  scaleOnHover = 1.015,
}: SpringTiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springConfig = { damping: 25, stiffness: 240, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mousePosX = e.clientX - rect.left;
    const mousePosY = e.clientY - rect.top;

    const normalizedX = mousePosX / rect.width - 0.5;
    const normalizedY = mousePosY / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    glareX.set((mousePosX / rect.width) * 100);
    glareY.set((mousePosY / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="relative w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? scaleOnHover : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`relative will-change-transform transform-gpu select-none rounded-3xl overflow-hidden transition-shadow duration-300 ${className}`}
      >
        {children}

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-3xl"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(circle 380px at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.22), transparent 70%)`,
          }}
        />
      </motion.div>
    </div>
  );
}
