import { useState, useEffect } from "react";
import Head from "next/head";
import { searchContext } from "../Contexts/searchContext";
import { detailsContext } from "../Contexts/detailsContext";
import getData from "../functions/getData";
import getInformation from "../functions/getInformation";
import getLocation from "../functions/getLocation";
import Temperature from "../components/Temperature";
import Country from "../components/Country";
import Date from "../components/Date";
import SVG from "../components/SVG";
import MoreButton from "../components/MoreButton";
import Search from "../components/Search/Search";
import Loading from "../components/Loading";
import More from "../components/More";

const dataSchema = {
  condition: "",
  temp: "",
  country: "",
  date: "",
  humidity: "",
};

const App = () => {
  const [dataHolder, setDataHolder] = useState(dataSchema);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(false);

  const fetchData = (country) => {
    setMore(false);
    setLoading(false);
    getData(country)
      .then(({ data }) => {
        if (data) {
          const information = getInformation(data);
          setDataHolder(information);
          setLoading(true);
        }
      })
      .catch((err) => {
        setLoading(0);
      });
  };

  const handleMore = () => setMore(!more);

  useEffect(() => {
    console.log(process.env);
    getLocation(setDataHolder, setLoading);
  }, []);

  return (
    <div className="relative pt-8 min-h-screen bg-a1">
      <Head>
        <title>Weather</title>
        <link rel="icon" href="/sun.svg" />
      </Head>
      <searchContext.Provider value={fetchData}>
        <Search />
      </searchContext.Provider>
      {!loading ? (
        <Loading status={loading} />
      ) : (
        <div className="mt-8 p-8 flex flex-col items-center">
          <div className="py-8 font-oxanium text-primary text-center">
            <div className="flex justify-center items-center">
              <SVG condition={dataHolder.condition} />
              <Temperature temp={dataHolder.temp} />
            </div>
            <Country country={dataHolder.country} />
            <Date fullDate={dataHolder.date} />
          </div>
          <MoreButton handleMore={handleMore} more={more} />
        </div>
      )}
      <detailsContext.Provider value={dataHolder.humidity}>
        {more && <More more={more} />}
      </detailsContext.Provider>
    </div>
  );
};

export default App;
