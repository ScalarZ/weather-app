import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import Sun from "./Sun_rise_set/Sun";
import Sunrise from "./Sun_rise_set/Sunrise";
import Sunset from "./Sun_rise_set/Sunset";

const Sun_rise_set = () => {
  const {
    sun_rise_set: { sunrise, sunset },
  } = useContext(moreContext);
  return (
    <div className="m-auto p-4 h-64 max-w-sm flex items-end">
      <div className="w-full flex justify-between items-start">
        <Sunrise sunrise={sunrise} />
        <Sun />
        <Sunset sunset={sunset} />
      </div>
    </div>
  );
};

export default Sun_rise_set;
