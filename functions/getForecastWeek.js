import getDays from "./getDays";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getForecastWeek = (data) => {
  const {
    forecast: { forecastday },
  } = data;

  const forecastWeek = forecastday.map((forecast) => {
    const {
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        condition: { icon },
      },
    } = forecast;

    const dayIndex = Number(date.slice(8, 10) - 1) % 7;
    const dateIndex = Number(date.slice(8, 10));
    const monthIndex = Number(date.slice(5, 7)) - 1;

    const days = getDays(monthIndex);

    const day = days[dayIndex].slice(0, 3);
    const date_ = dateIndex;
    const month = months[monthIndex].slice(0, 3);
    
    const temp = { maxtemp_c, mintemp_c };

    return { day, date_, month, temp, icon };
  });
  return forecastWeek;
};

export default getForecastWeek;
