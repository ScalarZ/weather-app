import Image from "next/image";

const Sun = () => {
  return (
    <div className="relative flex justify-center flex-grow bg-a1 animate-turn">
      <i className="absolute h-12 w-12 top-y2 left-x2 flex">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24.0001"
            cy="24"
            r="10.8636"
            fill="#FFF100"
            stroke="#FFC339"
            strokeWidth="3"
            className="animate-colorChange1"
          />
          <rect
            x="21.8182"
            width="4.36363"
            height="8.72727"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="10.1819"
            y="5.09085"
            width="4.36363"
            height="8.72727"
            transform="rotate(-30 10.1819 5.09085)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="38.6881"
            y="43.9217"
            width="4.36363"
            height="8.72727"
            transform="rotate(150 38.6881 43.9217)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="14.5452"
            y="36.3636"
            width="4.36363"
            height="8.72727"
            transform="rotate(30 14.5452 36.3636)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="34.3245"
            y="12.649"
            width="4.36363"
            height="8.72727"
            transform="rotate(-150 34.3245 12.649)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="1.45465"
            y="13.9609"
            width="4.36363"
            height="8.72727"
            transform="rotate(-60 1.45465 13.9609)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="46.1036"
            y="33.4545"
            width="4.36363"
            height="8.72727"
            transform="rotate(120 46.1036 33.4545)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="9.01239"
            y="29.0909"
            width="4.36363"
            height="8.72727"
            transform="rotate(60 9.01239 29.0909)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="38.5453"
            y="18.3245"
            width="4.36363"
            height="8.72727"
            transform="rotate(-120 38.5453 18.3245)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            y="26.1818"
            width="4.36363"
            height="8.72727"
            transform="rotate(-90 0 26.1818)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="39.2726"
            y="26.1818"
            width="4.36363"
            height="8.72727"
            transform="rotate(-90 39.2726 26.1818)"
            fill="#FFC339"
            className="animate-colorChange2"
          />
          <rect
            x="21.8182"
            y="39.2727"
            width="4.36363"
            height="8.72727"
            fill="#FFC339"
            className="animate-colorChange2"
          />
        </svg>
      </i>
    </div>
  );
};

export default Sun;
