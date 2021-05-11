const getTemperature = (data) => {
  const {
    current: { temp_c },
  } = data;
  return temp_c;
};

export default getTemperature;
