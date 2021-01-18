import React, { useState } from "react";
import info from "../stays.json";
import Apartment from "./Apartment";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

function Apartments() {
  const [apartments, setApartments] = useState(info);
  const [apartmentsToDisplay, setApartmentsToDisplay] = useState(info);
  const [location, setLocation] = useState("Helsinki");
  const [guests, setGuests] = useState("4");

  const filterButton = (e) => {
    e.preventDefault();

    const result = apartments
      .filter((apartment) => apartment.city === location)
      .filter((apartment) => apartment.maxGuests === Number(guests));

    setApartmentsToDisplay(result);
  };

  const handleFilterChange = (e, filterType) => {
    e.preventDefault();
    //changes state
    switch (filterType) {
      case "location":
        setLocation(e.target.value);
        break;
      case "guests":
        setGuests(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="apartment__filter">
        <form action="">
          <label htmlFor="location"></label>

          <select
            name="location"
            id="location"
            onChange={(e) => handleFilterChange(e, "location")}
          >
            <option value="all">all</option>
            <option value="Helsinki">Helsinki,Finland</option>
            <option value="Turku">Turku,Finland</option>
            <option value="Oulu">Oulu,Finland</option>
            <option value="Vaasa">Vaasa,Finland</option>
          </select>

          <label htmlFor="guests"></label>
          <select
            name="guests"
            id="guests"
            onChange={(e) => handleFilterChange(e, "guests")}
          >
            <option value="0">0</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="10">10 guests</option>
          </select>
          <button onClick={filterButton}>search</button>
        </form>

        <section className="apartments">
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </section>
      </div>

      <div className="apartments__flexContainer">
        {apartmentsToDisplay.map((single, key) => {
          return <Apartment key={single.id} {...single} />;
        })}
      </div>
    </div>
  );
}

export default Apartments;
