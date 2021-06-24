import Image from "next/image";

const Loading = ({ status, isGpsOn }) => {
  if (!isGpsOn) {
    return null;
  }
  if (status === 0) {
    return (
      <div className="font-oxanium text-primary text-center transform translate-y-32">
        <Image src="/rain.svg" height="120" width="140" />
        <h1
          style={{
            textShadow: "2px 2px 3px #ffffff80",
            backgroundColor: "#b1c1fd",
          }}
          className="text-7xl font-semibold text-transparent text-center bg-clip-text "
        >
          404
        </h1>
        <h2
          style={{
            textShadow: "2px 2px 2px #ffffff80",
            backgroundColor: "#b1c1fd",
          }}
          className="mt-3 text-2xl font-semibold text-transparent text-center bg-clip-text"
        >
          Not Found
        </h2>
      </div>
    );
  }
  return (
    <div className="absolute top-y3 left-x3">
      <i className="flex animate-spin">
        <Image src="/loading.svg" height="30" width="30" />
      </i>
    </div>
  );
};

export default Loading;
