const getSunRiseSet = (data) => {
  const {
    forecast: { forecastday },
  } = data;
  const day1 = forecastday[0];
  const {
    astro: { sunrise, sunset },
  } = day1;
  return { sunrise, sunset };
};

export default getSunRiseSet;
