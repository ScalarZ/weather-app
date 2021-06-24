import Image from "next/image";

const myLoader = ({ src }) => {
  return `${src}`;
};

const ForecastCard = ({ information }) => {
  return (
    <li
      style={{ border: "1px solid #BBCAFF50" }}
      className="mx-2 px-3 py-3 rounded h-32 w-32 flex flex-col justify-center items-center font-oxanium font-medium text-sm text-primary text-center shadow-out-c1 "
    >
      <span>{information.time.slice(11)}</span>
      <i className="mt-2 h-14 w-14 flex">
        <Image
          loader={myLoader}
          src={information.icon}
          height="60"
          width="60"
        />
      </i>
      <span>{information.temp_c + "°C"}</span>
    </li>
  );
};

export default ForecastCard;
