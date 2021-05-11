import { useContext } from "react";
import { detailsContext } from "../../Contexts/detailsContext";
import Percentage from "./Humidity/Percentage";
import ProgressBar from "./Humidity/ProgressBar";

const Humidity = () => {
  const { humidity } = useContext(detailsContext);
  return (
    <div className="py-4 flex justify-center">
      <div className="relative">
        <ProgressBar percentage={humidity} />
        <div className="absolute top-1/2 left-1/2 font-oxanium text-secondary text-center text-2xl font-medium transform -translate-x-1/2 -translate-y-1/2">
          <h3>Humidity</h3>
          <Percentage percentage={humidity} />
        </div>
      </div>
    </div>
  );
};

export default Humidity;
