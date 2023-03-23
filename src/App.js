import React, { useState } from "react";
import Board from "./components/Board";
import GuestCards from "./components/GuestCards";
import RoomCards from "./components/RoomCards";


function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  function handleRoomClick(room) {
    setSelectedRoom(room);
    console.log("Selected room:", room);
  }

  return (
    <div className="App">
      <main className="flexbox">
        <div className="board_rooms__label">Rooms</div>
        <Board className="board-rooms">
          <RoomCards handleRoomClick={handleRoomClick} />
        </Board>
        <div className="board_info__label">Info</div>
        <Board className="board-info">
          {selectedRoom && (
            <div className="room_container">
              <div className="room_container_header">
              <h2>{selectedRoom.name}</h2>
              <p>{selectedRoom.description}</p>
              </div>
            </div>
          )}
        </Board>
        <div className="board_guests__label">Guests</div>
        <Board className="board-guests">
          <GuestCards />
        </Board>
      </main>
    </div>
  );
}

export default App;
