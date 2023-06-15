import styles from "./Timer.module.scss";

const Timer = props => {
  const hours = Math.floor((props.time / 3600000) % 24);
  const minutes = Math.floor((props.time / 60000) % 60);
  const seconds = Math.floor((props.time / 1000) % 60);
  const milliseconds = props.time % 1000;

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