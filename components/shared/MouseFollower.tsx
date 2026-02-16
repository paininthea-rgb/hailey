"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const pressedRef = useRef(false);
  const interactiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canUseCustomCursor =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canUseCustomCursor) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    function onMouseMove(event: MouseEvent) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }

      const targetElement = event.target as HTMLElement | null;
      interactiveRef.current = Boolean(
        targetElement?.closest("a, button, input, textarea, select, [role='button']"),
      );
    }

    function onMouseDown() {
      pressedRef.current = true;
    }

    function onMouseUp() {
      pressedRef.current = false;
    }

    function animate() {
      const ring = ringRef.current;
      if (!ring) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const easing = 0.17;
      const dx = targetRef.current.x - ringPosRef.current.x;
      const dy = targetRef.current.y - ringPosRef.current.y;

      ringPosRef.current.x += dx * easing;
      ringPosRef.current.y += dy * easing;

      velocityRef.current.x = dx;
      velocityRef.current.y = dy;

      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 28);
      const stretch = 1 + speed / 65;
      const squeeze = 1 - Math.min(speed / 120, 0.24);
      const angle = Math.atan2(velocityRef.current.y, velocityRef.current.x) * (180 / Math.PI);

      let scale = pressedRef.current ? 0.85 : 1;
      if (interactiveRef.current) {
        scale *= 1.2;
      }

      ring.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${stretch * scale}, ${squeeze * scale})`;

      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-pink-500/80 bg-pink-200/20"
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed left-0 top-0 z-[10000] h-2.5 w-2.5 rounded-full bg-zinc-900"
      />
    </>
  );
}
