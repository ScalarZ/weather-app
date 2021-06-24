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
        width="210"
        height="210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          filter="url(#filter0_di)"
          cx="105"
          cy="105"
          r="90"
          stroke="#D6DFFF"
          strokeWidth="24"
          strokeDasharray="564"
          strokeDashoffset="170"
          strokeLinecap="round"
          className="origin-center"
          style={{
            transformBox: "fill-box",
            transform: "rotate(145deg)",
          }}
        />
        <filter
          id="filter0_di"
          x="0"
          y="0"
          width="210"
          height="210"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"   
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.733333 0 0 0 0 0.792157 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.733333 0 0 0 0 0.792157 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
        </filter>
        <circle
          id="percentage"
          cx="105"
          cy="105"
          r="90"
          fill="none"
          stroke="url(#paint0_linear)"
          strokeWidth="24"
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
            <stop stopColor="#6C8DFF" />
            <stop offset="1" stopColor="#6C7CB4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ProgressBar;
