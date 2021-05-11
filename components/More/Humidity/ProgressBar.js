const ProgressBar = ({ percentage }) => {
  const value = 394 - (Number(percentage) * 394) / 100 + 170;
  return (
    <div>
      <style jsx>{`
        #percentage {
          animation: animate 1s ease-in forwards;
        }
        @keyframes animate {
          to {
            stroke-dashoffset: ${value};
          }
        }
      `}</style>
      <svg
        width="200"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="#0f1c49"
          stroke="#080e25"
          strokeWidth="20"
          strokeDasharray="564"
          strokeDashoffset="170"
          strokeLinecap="round"
          className="origin-center"
          style={{
            transformBox: "fill-box",
            transform: "rotate(145deg)",
          }}
        />
        <circle
          id="percentage"
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#paint0_linear)"
          strokeWidth="20"
          strokeDasharray="564"
          strokeDashoffset="564"
          strokeLinecap="round"
          className=" origin-center"
          style={{
            transformBox: "fill-box",
            transform: "rotate(145deg)",
          }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="190"
            y1="153.5"
            x2="9.49999"
            y2="151"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E0FF" />
            <stop offset="0.505259" stopColor="#0075FF" />
            <stop offset="0.999006" stopColor="#0047FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ProgressBar;
