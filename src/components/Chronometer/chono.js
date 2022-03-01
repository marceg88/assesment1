import React, { useEffect, useState } from 'react';

function Timer() {
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const [inter, setInter] = useState();

  const randomTime = () => {
    const minuts = Math.round(Math.random() * (15 - 0) + 0);
    const seconds =
      minuts > 0
        ? Math.round(Math.random() * (60 - 0) + 0)
        : Math.round(Math.random() * (60 - 30) + 30);
    setMin(minuts);
    setSec(seconds);
  };
  useEffect(() => {
    randomTime();
    if (sec !== 0 && min !== 0) {
      setInter(
        setInterval(() => {
          setSec((seconds) => seconds - 1);
        }, 1000)
      );
    }
    return () => clearInterval(inter);
  }, []);
  useEffect(() => {
    if (sec === 0) {
      if (min === 0) clearInterval(inter);
      else {
        setSec(60);
        setMin(min - 1);
      }
    }
  }, [sec]);

  return (
    <div>
      <p>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </p>
    </div>
  );
}

export default Timer;
