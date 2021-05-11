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

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const getData = (data) => {
  const {
    location: { localtime },
  } = data;

  const dayIndex = Number(localtime.slice(8, 10) - 1) % 7;
  const dateIndex = Number(localtime.slice(8, 10));
  const monthIndex = Number(localtime.slice(5, 7)) - 1;

  const day = days[dayIndex];
  const date = dateIndex;
  const month = months[monthIndex];
  return {
    day,
    date,
    month,
  };
};

export default getData;
