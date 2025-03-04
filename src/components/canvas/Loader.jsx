import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="relative w-16 h-16">
        {/* Circular Background */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="40"
          />
          {/* Progress Circle */}
          <circle
            className="text-white"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (progress / 100) * 251.2}
            cx="50"
            cy="50"
            r="40"
            strokeLinecap="round"
            transform="rotate(-90 50 50)" // Rotate to start from top
          />
        </svg>

        {/* Percentage Text */}
        <p className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-white">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
