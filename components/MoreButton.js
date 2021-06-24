import Image from "next/image";

const MoreButton = ({ handleMore, more }) => {
  return (
    <button
      style={{ outline: "none" }}
      className="mt-7 h-10 w-10 rounded-full flex justify-center items-center bg-a1 shadow-out-a1"
      onClick={handleMore}
    >
      <div className={`flex transform ${!more ? "rotate-0" : "rotate-180"}`}>
        <i className="pt-2 flex animate-bounce">
          <Image src="/down.svg" height="12" width="22" />
        </i>
      </div>
    </button>
  );
};

export default MoreButton;
