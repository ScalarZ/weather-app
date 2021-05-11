const getCondition = (data) => {
  const {
    current: {
      condition: { icon },
    },
  } = data;
  return icon;
};

export default getCondition;
