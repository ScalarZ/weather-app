const Visibility = ({ visibility }) => {
  return (
    <div
      style={{ height: "146px", width: "100px", border: "1px solid #D6DFFF" }}
      className="py-3 rounded-lg flex justify-center items-center font-oxanium font-medium text-primary text-center shadow-in-out-a1"
    >
      <div>
        <h3 className="text-lg">Visibility</h3>
        <i
          style={{ height: "60px", width: "60px" }}
          className="mx-auto my-2 flex justify-center"
        >
          <svg
            width="58"
            height="48"
            viewBox="0 0 58 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.7822 6.2599C27.1697 4.60679 27.9384 3.55407 27.9957 3.47511C28.5471 2.71579 28.3785 1.65321 27.6192 1.10176C26.8597 0.550421 25.7973 0.718757 25.2457 1.47831C20.0939 8.57117 10.1407 17.7645 0.932742 22.4833C0.92991 22.4848 0.927191 22.4862 0.924472 22.4876C0.534333 22.6876 0.243653 23.0259 0.100126 23.4253C-0.0333188 23.7963 -0.0334321 24.2032 0.100126 24.5747C0.243653 24.9739 0.534333 25.3124 0.924472 25.5124C0.927304 25.5138 0.930023 25.5152 0.932742 25.5167C10.9171 30.6331 20.565 40.0955 25.2458 46.5217C25.7945 47.2773 26.8563 47.4522 27.6193 46.8982C28.3786 46.3468 28.5471 45.2842 27.9958 44.5249C27.9384 44.4459 27.1698 43.3932 25.7823 41.7401C28.545 36.7796 29.4848 29.6979 29.4848 23.9999C29.4848 18.2982 28.5437 11.2181 25.7822 6.2599ZM23.3752 38.9955C18.2089 33.3447 11.9217 27.9068 5.23278 23.9999C11.9091 20.1006 18.1926 14.6727 23.3752 9.00447C24.2259 10.831 24.8988 13.0778 25.3615 15.598C21.272 16.2082 18.1248 19.7432 18.1248 23.9999C18.1248 28.2567 21.2719 31.7916 25.3616 32.402C24.8987 34.9223 24.2259 37.169 23.3752 38.9955ZM21.5232 23.9999C21.5232 21.4559 23.3965 19.3414 25.8361 18.9628C26.0004 20.5781 26.0865 22.2667 26.0865 23.9999C26.0865 25.7331 26.0004 27.4219 25.8361 29.0371C23.3965 28.6585 21.5232 26.544 21.5232 23.9999Z"
              fill="#6C7CB4"
            />
            <line
              x1="38.49"
              y1="15.4735"
              x2="57.5323"
              y2="8.58938"
              stroke="#6C7CB4"
              strokeWidth="3"
              strokeDasharray="21"
              strokeDashoffset="21"
              strokeLinecap="round"
              className="animate-stroke2"
            />
            <line
              x1="39"
              y1="23.5"
              x2="59.2485"
              y2="23.5"
              stroke="#6C7CB4"
              strokeWidth="3"
              strokeDasharray="21"
              strokeDashoffset="21"
              strokeLinecap="round"
              className="animate-stroke2"
            />
            <line
              x1="38.5022"
              y1="32.5866"
              x2="57.5822"
              y2="39.3653"
              stroke="#6C7CB4"
              strokeWidth="3"
              strokeDasharray="21"
              strokeDashoffset="21"
              strokeLinecap="round"
              className="animate-stroke2"
            />
          </svg>
        </i>
        <span>{`${visibility} km`}</span>
      </div>
    </div>
  );
};

export default Visibility;
