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

const getData = (data) => {
  const {
    location: { localtime },
  } = data;

  const dayIndex = Number(localtime.slice(8, 10) - 1) % 7;
  const dateIndex = Number(localtime.slice(8, 10));
  const monthIndex = Number(localtime.slice(5, 7)) - 1;

  const days = getDays(monthIndex);

  const day = days[dayIndex].slice(0, 3);
  const date = dateIndex;
  const month = months[monthIndex].slice(0, 3);
  return {
    day,
    date,
    month,
  };
};

export default getData;
