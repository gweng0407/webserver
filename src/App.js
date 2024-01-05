import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Stream from "./pages/stream";

const ENDPOINT = "http://127.0.0.1:5000";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(ENDPOINT);
    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stream" element={<Stream socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
