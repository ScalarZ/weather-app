import { useContext } from "react";
import { searchContext } from "../../Contexts/searchContext";

const Button = ({ changeWidth, value }) => {
  const search = useContext(searchContext);
  return (
    <button
      style={{ border: "1px solid #00000010", outline: "none" }}
      button="button"
      className="absolute top-0 right-0 h-10 w-10 rounded-full flex justify-center items-center bg-a1 shadow-a1"
      onClick={!value ? changeWidth : () => search(value)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20.075"
        viewBox="0 0 20 20.075"
      >
        <g id="loupe" transform="translate(-0.96)">
          <g id="Group_6" data-name="Group 6" transform="translate(0.96)">
            <path
              id="Path_41"
              data-name="Path 41"
              d="M20.284,15.82l-3.3-3.3a9.115,9.115,0,0,0,1-4.005,8.511,8.511,0,1,0-8.511,8.511,9.115,9.115,0,0,0,4.005-1l3.3,3.3a2.42,2.42,0,0,0,3.5,0A2.609,2.609,0,0,0,20.284,15.82Zm-10.814-.8a6.508,6.508,0,1,1,6.508-6.508A6.5,6.5,0,0,1,9.471,15.019Z"
              transform="translate(-0.96)"
              fill="#212121"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default Button;
