import { useContext } from "react";
import { moreContext } from "../../Contexts/moreContext";
import Image from "next/image";
import Sunrise from "./Sun_rise_set/Sunrise";
import Sunset from "./Sun_rise_set/Sunset";

const Sun_rise_set = () => {
  const {
    sun_rise_set: { sunrise, sunset },
  } = useContext(moreContext);
  return (
    <div
      style={{ maxWidth: "374px" }}
      className="relative m-auto mb-4 py-1 px-2 h-auto rounded-2xl flex justify-center items-center shadow-out-b1"
    >
      <div className="absolute h-32 w-32 bg-a1 rounded-full shadow-out-b1 z-10"></div>
      <div className="absolute h-full w-full bg-a1 rounded-full flex justify-center items-center z-20">
        <Image src="/sun.png" height="83.3" width="87" className="object-fill"/>
      </div>
      <div className="w-full flex justify-between items-start">
        <Sunrise sunrise={sunrise} />
        <Sunset sunset={sunset} />
      </div>
    </div>
  );
};

export default Sun_rise_set;
