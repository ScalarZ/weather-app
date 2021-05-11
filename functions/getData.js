import axios from "axios";

const getData = async (country) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: country, days: "3" },
    headers: {
      "x-rapidapi-key": "e5dc354a58mshdfea98627c6c8a5p1782c9jsnb704160ba22e",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const data = await axios.request(options);

  return data;
};

export default getData;
