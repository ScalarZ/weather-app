import Sun from "./Sun_rise_set/Sun";
import Sunrise from "./Sun_rise_set/Sunrise";
import Sunset from "./Sun_rise_set/Sunset";

const Sun_rise_set = () => {
  return (
    <div className="m-auto p-4 h-64 max-w-sm flex items-end">
      <div className="w-full flex justify-between items-start">
        <Sunrise />
        <Sun />
        <Sunset />
      </div>
    </div>
  );
};

export default Sun_rise_set;
