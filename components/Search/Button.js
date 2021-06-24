import { useContext } from "react";
import { searchContext } from "../../Contexts/searchContext";
import Image from "next/image";

const Button = ({value }) => {
  const search = useContext(searchContext);
  return (
    <button
      style={{
        outline: "none",
      }}
      button="button"
      className="absolute top-0 right-0 h-10 w-10 rounded-full flex justify-center items-center"
      onClick={() => search(value)}
      disabled={!value}
    >
      <Image src="/search.svg" height="24" width="24" />
    </button>
  );
};

export default Button;
