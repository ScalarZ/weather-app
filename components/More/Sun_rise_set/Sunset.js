const Sunset = ({ sunset }) => {
  return (
    <div className="p-2 w-32 font-oxanium font-medium text-center bg-a1 z-10">
      <h3 className="text-3xl font-semibold">Sunset</h3>
      <span className="text-xl">{sunset}</span>
    </div>
  );
};

export default Sunset;
