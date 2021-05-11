const useFetch = async (country) => {
  const res = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${country}&days=3`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e5dc354a58mshdfea98627c6c8a5p1782c9jsnb704160ba22e",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  return data;
};

export default useFetch;
