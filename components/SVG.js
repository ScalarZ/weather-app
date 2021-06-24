import Image from "next/image";

const myLoader = ({ src }) => {
  return `${src}`;
};
const SVG = ({ condition }) => {
  return <Image loader={myLoader} src={condition} height="64" width="64" />;
};

export default SVG;
