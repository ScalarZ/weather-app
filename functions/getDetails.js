const getDetails = (data) => {
  const {
    current: { humidity, wind_kph, pressure_mb, vis_km },
  } = data;
  return { humidity, wind_kph, pressure_mb, vis_km };
};

export default getDetails;
