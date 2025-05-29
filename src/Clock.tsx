import { useState, useEffect } from "react";

function Clock() {
  const date = new Date();

  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    return new Date().toLocaleTimeString("pl-PL", {
      timeZone: "Europe/Warsaw",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="clockContainer">
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
