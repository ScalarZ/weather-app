import getTemperature from "./getTemperature";
import getDate from "./getDate";
import getCountry from "./getCountry";
import getCondition from "./getCondition";
import getDetails from "./getDetails";
import getSunRiseSet from "./getSunRiseSet";
import getForecastDay from "./getForecastDay";
import getForecastWeek from "./getForecastWeek";

const getInformation = (data) => {
  const temp = getTemperature(data);
  const date = getDate(data);
  const country = getCountry(data);
  const condition = getCondition(data);
  const details = getDetails(data);
  const sun_rise_set = getSunRiseSet(data);
  const forecastDay = getForecastDay(data);
  const forecastWeek = getForecastWeek(data);

  return {
    temp,
    date,
    country,
    condition,
    more: { details, sun_rise_set, forecastDay, forecastWeek },
    status: 200,
  };
};

export default getInformation;
