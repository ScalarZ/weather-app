const getForecastDay = (data) => {
  const {
    forecast: { forecastday },
  } = data;
  const forecastDay = forecastday[0].hour;
  return forecastDay;
};

export default getForecastDay;
