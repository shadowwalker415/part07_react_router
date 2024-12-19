const Country = ({ country }) => {
  if (!country) return null;

  if (!country.found) {
    return <div>not found...</div>;
  }

  const countryDetails = {
    name: country.data.name.official,
    capital: country.data.capital[0],
    population: country.data.population,
    flag: country.data.flags.png,
  };

  return (
    <div>
      <h3>{countryDetails.name} </h3>
      <div>capital {countryDetails.capital} </div>
      <div>population {countryDetails.population}</div>
      <img
        src={countryDetails.flag}
        height="100"
        alt={`flag of ${countryDetails.name}`}
      />
    </div>
  );
};

export default Country;
