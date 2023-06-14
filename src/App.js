import Container from "./components/Container/Container";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <Container>
      <Timer time={time}></Timer>
      <Button type="button" onClick={() => setTimeOn(true)}>START</Button>
      <Button type="button" onClick={() => setTimeOn(false)}>STOP</Button>
      <Button type="button" onClick={() => setTime(0)}>RESET</Button>
    </Container>
  );
}

export default App;
