import { useState, useRef } from "react";
import Button from "./Button";

const Search = ({ isGpsOn }) => {
  const input = useRef(null);
  const [value, setValue] = useState("");

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
          style={{ border: "2px solid #D6DFFF" }}
          type="text"
          value={value}
          className="h-10 rounded-full bg-a1 font-oxanium font-medium text-lg text-primary animate-search"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button value={value} />
      </form>
      {!isGpsOn && (
        <div className="font-oxanium text-primary">
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
