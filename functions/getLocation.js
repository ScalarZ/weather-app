import useFetch from "../useFetch";
import fetchTimeZone from "./fetchTimeZone";
import getInformation from "./getInformation";

const getLocation = (setData, setLoading, setIsGpsOn) => {
  const { geolocation } = navigator;

  if (!geolocation) {
    setIsGpsOn(false);
  }

  const success = async (position) => {
    const { latitude, longitude } = position.coords;
    const q = `${latitude},${longitude}`;

    const country = await fetchTimeZone(q);
    const data = await useFetch(country);

    const information = getInformation(data);
    setData(information);
    setLoading(true);
    setIsGpsOn(true);
  };
  const error = () => {
    setIsGpsOn(false);
  };

  return geolocation.getCurrentPosition(success, error);
};

export default getLocation;
