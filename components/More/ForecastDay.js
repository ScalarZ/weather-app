import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import ForecastCard from "./ForecastDay/ForecastCard";

const ForecastDay = () => {
  const { forecastDay } = useContext(moreContext);
  return (
    <ul className="overflow-x-scroll mt-4 py-4 flex">
      {forecastDay.map((forecast, index) => {
        const {
          time,
          condition: { icon },
          temp_c,
        } = forecast;
        return (
          <ForecastCard key={index} information={{ time, icon, temp_c }} />
        );
      })}
    </ul>
  );
};

export default ForecastDay;
