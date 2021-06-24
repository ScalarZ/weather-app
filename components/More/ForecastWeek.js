import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import Forecast from "./ForecastWeek/Forecast";

const ForecastWeek = () => {
  const { forecastWeek } = useContext(moreContext);
  console.log(forecastWeek);
  return (
    <div className="m-auto mt-10 mb-20 max-w-xs">
      <h1 className=" font-oxanium font-medium text-xl text-primary text-center">
        3-Days Forecast
      </h1>
      <ul>
        {forecastWeek.map((forecast, index) => (
          <Forecast key={index} information={forecast} />
        ))}
      </ul>
    </div>
  );
};

export default ForecastWeek;
