import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import Percentage from "./Humidity/Percentage";
import ProgressBar from "./Humidity/ProgressBar";

const Humidity = () => {
  const {
    details: { humidity },
  } = useContext(moreContext);
  return (
    <div className="relative m-auto my-10 h-56 w-56 rounded-full flex justify-center items-center bg-a1 shadow-out-b1">
      <div>
        <ProgressBar percentage={humidity} />
        <div className="absolute top-1/2 left-1/2 font-oxanium text-secondary text-center text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-primary font-extrabold">Humidity</h3>
          <Percentage percentage={humidity} />
        </div>
      </div>
    </div>
  );
};

export default Humidity;
