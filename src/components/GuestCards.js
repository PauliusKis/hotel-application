import React, { useState } from "react";
import guestList from "../components/data/guestList.json";
import "./GuestCard.css";

function GuestCards(props) {
  // const [selectedGuest, setSelectedGuest] = useState(0);
  // const key = props.id;

  return (
    <div>
      {guestList.map((listDetail, index) => {
        return (
          <div
            className="guest_card_container"
            id={listDetail.id}
            key={listDetail.id}
          >
            <p>{listDetail.first_name}</p>
            <p>{listDetail.last_name}</p>
            <p>{listDetail.job_title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default GuestCards;
