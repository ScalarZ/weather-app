const getCountry = (data) => {
  const {
    location: { name },
  } = data;
  return name;
};

export default getCountry;
