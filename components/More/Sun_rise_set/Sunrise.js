const Sunrise = ({ sunrise }) => {
  return (
    <div className="p-2 w-32 font-oxanium font-medium text-center z-20">
      <h3
        style={{
          fontSize: "26px",
          textShadow: "1px 1px 2px #FFFFFFB2",
          backgroundColor: "rgb(156 ,177, 255)",
        }}
        className="font-semibold bg-clip-text text-transparent"
      >
        Sunrise
      </h3>
      <span
        style={{
          textShadow: "1px 1px 2px #FFFFFFB2",
          backgroundColor: "rgb(156 ,177, 255)",
        }}
        className="text-lg bg-clip-text text-transparent"
      >
        {sunrise}
      </span>
    </div>
  );
};

export default Sunrise;
