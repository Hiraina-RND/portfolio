import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorEffect() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="max-sm:hidden">
      <motion.div
        style={{
          position: "fixed",
          left: smoothX,
          top: smoothY,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0) 90%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          filter: "blur(40px)",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: x,
          top: y,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fff",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 8px rgba(255,255,255,0.8)",
        }}
      />
    </div>
  );
}

export default CursorEffect;