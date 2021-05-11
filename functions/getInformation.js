import getTemperature from "./getTemperature";
import getDate from "./getDate";
import getCountry from "./getCountry";
import getCondition from "./getCondition";
import getDetails from "./getDetails";

const getInformation = (data) => {
  const temp = getTemperature(data);
  const date = getDate(data);
  const country = getCountry(data);
  const condition = getCondition(data);
  const humidity = getDetails(data);

  return {
    temp,
    date,
    country,
    condition,
    humidity,
    status: 200,
  };
};

export default getInformation;
