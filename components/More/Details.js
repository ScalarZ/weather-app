import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import Visibility from "./Details/Visibility";
import Pressure from "./Details/Pressure";
import Wind from "./Details/Wind";

const Details = () => {
  const {
    details: { vis_km, pressure_mb, wind_kph },
  } = useContext(moreContext);
  return (
    <div className="py-4 m-auto max-w-sm flex justify-between items-center">
      <Visibility visibility={vis_km} />
      <Pressure pressure={pressure_mb} />
      <Wind wind={wind_kph} />
    </div>
  );
};

export default Details;
