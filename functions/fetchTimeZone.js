import axios from "axios";
import getCountry from "./getCountry";

const fetchTimeZone = async (q) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/timezone.json",
    params: { q },
    headers: {
      "x-rapidapi-key": "81f18bce7fmshf77bd73f16ea1efp1d216djsn0e44d70b114c",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const { data } = await axios.request(options);
  const country = getCountry(data);

  return country;
};

export default fetchTimeZone;
