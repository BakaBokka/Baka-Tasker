import { useRef, useEffect } from "react";
import playIco from "../../img/play-fill.svg";
import pauseIco from "../../img/pause-fill.svg";
import { formatTime } from "../../utils/helpers";
import "./Stopwatch.scss";

const Stopwatch = (props: {
  id: string;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  timer: number;
  setTimer: (timer: any) => void;
}) => {
  const increment: any = useRef();

  useEffect(() => {

    if (props.isPaused === false) {
      increment.current = setInterval(() => {
        props.setTimer((timer: any) => timer + 1);
      }, 1000);
    } else  {

      clearInterval(increment.current);

      localStorage.setItem(`timer${props.id}`, JSON.stringify(props.timer));
    }
    // eslint-disable-next-line
  }, [props.isPaused]);

  //Запуск и остановка таймера
  const handleTimer = () => {
    props.setIsPaused(!props.isPaused);
  };

  //Сохранение данных таймера при закрытии или обновлении страницы
  window.onbeforeunload = function (e: any) {
    localStorage.setItem(`timer${props.id}`, JSON.stringify(props.timer));
  };

  return (
    <div className="Stopwatch">
      <div className="Stopwatch__content">
        <p className="Stopwatch__time">{formatTime(props.timer)}</p>
        <div className="buttons">
          {props.isPaused ? (
            <img
              className="Stopwatch__image"
              src={playIco}
              alt="play ico"
              onClick={handleTimer}
            />
          ) : (
            <img
              className="Stopwatch__image"
              src={pauseIco}
              alt="pause ico"
              onClick={handleTimer}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
