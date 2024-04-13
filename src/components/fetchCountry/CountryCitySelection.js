import React, { useEffect, useState } from "react";

const CountryCitySelection = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [singleContry, setSingleCountry] = useState();
  const [singleCity, setSingleCity] = useState();
  const [submit, setSubmit] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const res = await response.json();
      setCountries(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCities = (country) => {
    setSubmit(false);
    setSingleCity(null);
    setSingleCountry(country);
    const findCities = countries.find((c) => c.country === country);
    setCities(findCities?.cities);
  };

  const handleClick = () => {
    if (singleContry && singleCity) {
      setSubmit(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="filter-section">
      <div className="container">
        <h2>Fetch Country City</h2>
        <div>
          {countries && (
            <select
              style={{ width: "250px", marginRight: "20px", padding: "5px" }}
              value={singleContry}
              onChange={(e) => fetchCities(e.target.value)}
            >
              <option disabled selected hidden>
                Select Country
              </option>
              {countries &&
                countries.map((country) => {
                  return (
                    <option key={country.country} value={country.country}>
                      {country.country}
                    </option>
                  );
                })}
            </select>
          )}
          {cities && (
            <select
              style={{ width: "220px", marginRight: "20px", padding: "5px" }}
              onChange={(e) => setSingleCity(e.target.value)}
              value={singleCity}
            >
              <option disabled selected hidden>
                Select City
              </option>
              {cities &&
                cities.map((city) => {
                  return (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  );
                })}
            </select>
          )}
          <button onClick={handleClick} style={{ padding: "5px" }}>
            Go
          </button>
        </div>
        {submit && (
          <h2>
            Your Country is {singleContry} & city is {singleCity}
          </h2>
        )}
      </div>
    </section>
  );
};

export default CountryCitySelection;
