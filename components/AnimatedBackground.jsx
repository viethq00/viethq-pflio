"use client";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] animate-orb" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-orb-reverse" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-purple-500/4 blur-[80px] animate-orb-slow" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      {/* Top gradient fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
