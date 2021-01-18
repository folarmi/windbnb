import React from "react";
// import info from "../Stay";
// import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";

function Apartment({ photo, superHost, type, beds, rating, title }) {
  //   const [apart, setApart] = useState(info);
  //   console.log(apart);
  return (
    <div className="apartment">
      <main>
        <div className="apartment__card">
          <img src={photo} alt="" />
          <div className="apartment__info">
            {superHost ? <button>super host</button> : ""}
            <small>{type}</small>
            <small>{beds} beds</small>
            <small id="apartment__rating">✡ {rating}</small>
          </div>
          <h2>{title}</h2>
        </div>
      </main>
    </div>
  );
}

export default Apartment;
