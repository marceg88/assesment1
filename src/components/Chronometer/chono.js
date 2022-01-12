import React, { useEffect, useState } from 'react';

function Timer({setStop}) {

  const [random, setRandom] = useState(Math.floor((Math.random() * 1) * 60000));
  const [min, setMin] = useState(Math.floor((random % (1000 * 60 * 60)) / (1000 * 60)));
  const [sec, setSec] = useState(Math.floor((random % (1000 * 60)) / 1000));

  
  
    useEffect(() => {    
        const counter = setInterval(() => {
            setRandom((prev) => prev - 1000);
            setSec(Math.floor((random % (1000 * 60)) / 1000));   
          }, 1000) 
        if(random < 0){
        clearInterval(counter);
        setStop(true)
        }
        return () => clearInterval(counter);
    }, [random, setStop]);
  return (
    <div >
      <div >{min < 10 ? `0${min}`: min}</div>
    </div>
  );
}

export default Timer;