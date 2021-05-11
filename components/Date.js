const Date = ({ fullDate: { day, date, month } }) => {
  if (date < 10) {
    date = "0" + date;
  }
  return (
    <div>
      <span className="text-2xl">{`${day}, ${date} ${month}`}</span>
    </div>
  );
};

export default Date;
