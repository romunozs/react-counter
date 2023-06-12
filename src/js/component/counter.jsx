import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const clockIcon = <FontAwesomeIcon icon="fa-solid fa-clock" />;

const Clock = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedCount = count.toString().padStart(6, "0");

  return (
    <p className="counter">
      <FontAwesomeIcon icon={faClock} className="clockIcon" /> {formattedCount}
    </p>
  );
};

export default Clock;
