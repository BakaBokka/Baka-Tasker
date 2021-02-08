import { useState, useRef, useEffect } from "react";
import playIco from "../../img/play-fill.svg";
import pauseIco from "../../img/pause-fill.svg";
import "./Stopwatch.scss";

const Stopwatch = (props: {
  id: string;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
}) => {
  const timerData: string = localStorage.getItem(`timer${props.id}`)
    ? localStorage.getItem(`timer${props.id}`) || ""
    : "";
  const [timer, setTimer] = useState(+timerData);

  const increment: any = useRef();

  useEffect(() => {
    if (props.isPaused === false) {
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(increment.current);

      localStorage.setItem(`timer${props.id}`, JSON.stringify(timer));
    }
    // eslint-disable-next-line
  }, [props.isPaused]);

  //Запуск и остановка таймера
  const handleTimer = () => {
    props.setIsPaused(!props.isPaused);
  };

  //Сохранение данных таймера при закрытии или обновлении страницы
  window.onbeforeunload = function (e: any) {
    localStorage.setItem(`timer${props.id}`, JSON.stringify(timer));
  };

  //Форматер таймера
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${+minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="Stopwatch">
      <div className="Stopwatch__content">
        <p className="Stopwatch__time">{formatTime()}</p>
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
