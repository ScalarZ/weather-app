import ForecastDay from "./More/ForecastDay";
import ForecastWeek from "./More/ForecastWeek";
import Sun_rise_set from "./More/Sun_rise_set";
import Humidity from "./More/Humidity";
import Details from "./More/Details";

const More = () => {
  return (
    <div className="px-3 relative">
      <ForecastDay />
      <ForecastWeek />
      <Sun_rise_set />
      <div className="p-4">
        <Humidity />
        <Details />
      </div>
    </div>
  );
};

export default More;
