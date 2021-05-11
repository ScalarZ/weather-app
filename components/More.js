import Sun_rise_set from "./More/Sun_rise_set";
import Humidity from "./More/Humidity";
import Details from "./More/Details";

const More = () => {
  return (
    <div className="relative">
      <Sun_rise_set />
      <div className="p-4 bg-a3">
        <Humidity />
        <Details />
      </div>
    </div>
  );
};

export default More;
