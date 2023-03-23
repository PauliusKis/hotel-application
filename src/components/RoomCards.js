import React from "react";
import roomList from "../components/data/roomList.json";
import "./RoomCards.css";

function RoomCards(props) {
  return (
    <div>
      {roomList.map((room) => {
        return (
          <div
            key={room.id}
            id={room.id}
            className="room_card_container"
            onClick={() => props.handleRoomClick(room)}
          >
            <p>{room.name}</p>
            <p>{room.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RoomCards;
