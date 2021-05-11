import { useState, useRef } from "react";
import Button from "./Button";

const Search = ({ isGpsOn }) => {
  const input = useRef(null);
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  const changeWidth = () => {
    setToggle(!toggle);
    input.current.blur();
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div
      style={{ border: !isGpsOn && "1px solid #00000010" }}
      className={
        isGpsOn
          ? "flex flex-col justify-center items-center"
          : "mx-auto p-4 max-w-sm rounded-xl flex flex-col justify-center items-center font-medium shadow-a1 transform translate-y-16"
      }
    >
      <form className="relative" onSubmit={handleSearch}>
        <input
          ref={input}
          style={{ border: !toggle ? "none" : "1px solid #00000010" }}
          type="text"
          value={value}
          className={
            toggle
              ? "px-5 h-10 w-60 rounded-full bg-input1 text-lg font-oxanium font-medium transition-width duration-300"
              : "px-5 h-10 w-0 rounded-full bg-input1 text-lg font-oxanium font-medium transition-width duration-300"
          }
          onChange={(e) => setValue(e.target.value)}
        />
        <Button changeWidth={changeWidth} value={value} />
      </form>
      {!isGpsOn && (
        <div>
          <p className="pt-4 text-center text-warning">
            It looks like you did not turn on your <b>GPS</b>, or Geolocation is
            not supported by your browser
          </p>
          <p className="pt-4 text-center">
            Please, turn ON your <b>GPS</b> or Search Manually
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
