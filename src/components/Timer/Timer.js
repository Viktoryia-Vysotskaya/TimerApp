import styles from "./Timer.module.scss";

const millisecondsInHour = 3600000;
const hoursPerDay = 24;
const millisecondsInMinute = 60000;
const millisecondsInSecond = 1000;
const secondsInMinute = 60;

const Timer = props => {
  const hours = Math.floor((props.time / millisecondsInHour) % hoursPerDay);
  const minutes = Math.floor((props.time / millisecondsInMinute) % secondsInMinute);
  const seconds = Math.floor((props.time / millisecondsInSecond) % secondsInMinute);
  const milliseconds = props.time % millisecondsInSecond;

  const formattedHours = ("0" + hours).slice(-2);
  const formattedMinutes = ("0" + minutes).slice(-2);
  const formattedSeconds = ("0" + seconds).slice(-2);
  const formattedMilliseconds = ("0" + milliseconds).slice(-3);

  return (
    <div className={styles.timer}>
      <span>{formattedHours}&nbsp;:&nbsp;</span>
      <span>{formattedMinutes}&nbsp;:&nbsp;</span>
      <span>{formattedSeconds}&nbsp;:&nbsp;</span>
      <span>{formattedMilliseconds}&nbsp;</span>
    </div>
  );
};

export default Timer;
