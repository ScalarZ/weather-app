import { useContext } from "react";
import { detailsContext } from "../../Contexts/detailsContext";
import Visibility from "./Details/Visibility";
import Pressure from "./Details/Pressure";
import Wind from "./Details/Wind";

const Details = () => {
  const { vis_km, pressure_mb, wind_kph } = useContext(detailsContext);
  return (
    <div className="py-4 m-auto max-w-sm flex justify-between">
      <Visibility visibility={vis_km} />
      <Pressure pressure={pressure_mb} />
      <Wind wind={wind_kph} />
    </div>
  );
};

export default Details;
