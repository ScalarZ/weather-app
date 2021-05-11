import { useState, useRef } from "react";
import Button from "./Button";

const Search = () => {
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
    <div className="flex justify-center">
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
    </div>
  );
};

export default Search;
