import useFetch from "../useFetch";
import fetchTimeZone from "./fetchTimeZone";
import getInformation from "./getInformation";

const getLocation = (setData, setLoading) => {
  const { geolocation } = navigator;

  if (!geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  const success = async (position) => {
    const { latitude, longitude } = position.coords;
    const q = `${latitude},${longitude}`;

    const country = await fetchTimeZone(q);
    const data = await useFetch(country);

    const information = getInformation(data);
    setData(information);
    setLoading(true);
  };
  const error = () => {
    return alert("Unable to retrieve your location");
  };

  return geolocation.getCurrentPosition(success, error);
};

export default getLocation;
