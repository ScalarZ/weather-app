import Image from "next/image";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Forecast = ({ information }) => {
  const { date_, month, day, icon, temp } = information;
  return (
    <li className="my-6 p-2 rounded-lg flex justify-evenly items-center font-oxanium font-medium text-primary shadow-out-d1">
      <span>{date_ + " " + month}</span>
      <span>{day}</span>
      <Image loader={myLoader} src={icon} height="44" width="44" />
      <span>{temp.maxtemp_c + "/" + temp.mintemp_c + "°C"}</span>
    </li>
  );
};

export default Forecast;
