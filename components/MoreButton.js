const MoreButton = ({ handleMore, more }) => {
  return (
    <button
      style={{ border: "1px solid #00000010", outline: "none" }}
      className={
        !more
          ? "mt-7 h-10 w-10 rounded-full flex justify-center items-center shadow-a1 transform rotate-0 transition duration-300"
          : "mt-7 h-10 w-10 rounded-full flex justify-center items-center shadow-a1 transform rotate-180 transition duration-300"
      }
      onClick={handleMore}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="8"
        viewBox="0 0 18 8"
        className="animate-bounce"
      >
        <path
          id="Polygon_1"
          data-name="Polygon 1"
          d="M8.336.591a1,1,0,0,1,1.329,0l6.37,5.662A1,1,0,0,1,15.37,8H2.63a1,1,0,0,1-.664-1.747Z"
          transform="translate(18 8) rotate(180)"
        />
      </svg>
    </button>
  );
};

export default MoreButton;
