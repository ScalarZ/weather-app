import Image from "next/image";

const Loading = ({ status }) => {
  if (status === 0) {
    return (
      <div className="text-secondary text-center transform translate-y-32">
        <Image src="/rain.svg" height="144" width="158" />
        <h1 className="text-7xl font-semibold text-center">404</h1>
        <h2 className="mt-3 text-2xl font-semibold text-center">Not Found</h2>
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
