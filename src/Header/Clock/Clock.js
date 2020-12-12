import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const calcHour = hours => {
  let newHour = hours > 12 ? hours - 12 : hours;
  newHour = newHour === 0 ? 12 : newHour;
  return newHour;
};

const calcMinute = minutes => {
  let newMins = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return newMins;
};

const calcTimeOfDay = () => {
  let timeOfDay = new Date().getHours() < 12 ? "AM" : "PM";
  return timeOfDay;
};

const ClockContainer = styled.div`
  font-size: 22pt;
`;

const TimeOfDay = styled.span`
  margin-left: 2px;
  font-weight: bold;
  font-size: 12pt;
`;

const Clock = () => {
  const [hours, setHours] = useState(calcHour(new Date().getHours()));
  const [minutes, setMinutes] = useState(calcMinute(new Date().getMinutes()));
  const [timeOfDay, setTimeOfDay] = useState(calcTimeOfDay());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setHours(calcHour(new Date().getHours()));
    setMinutes(calcMinute(new Date().getMinutes()));
    setTimeOfDay(calcTimeOfDay());
  };

  return (
    <ClockContainer>
      {hours}:{minutes}
      <TimeOfDay>{timeOfDay}</TimeOfDay>
    </ClockContainer>
  );
};

export default Clock;
