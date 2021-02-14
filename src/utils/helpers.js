import moment from "moment";
import "moment/locale/ru";
import { RATE } from "../constants/constants";

//Форматер даты
export const formatDate = (date) => {
  moment.locale("ru");
  return moment(date).format('L, h:mm:ss');
};

//Форматер суммы
export const formatSumm = (timer) => {
  const summ = timer * (RATE / 3600);
  const reg = ` рублей `;
  return summ.toFixed(2).toString().replace(/[,.]/g, reg);
};

export const reformatSumm = (rub) => {
  const timer = rub.slice(0, -7).replace(/( рублей )/g, ".");
  const total =  +timer / (RATE / 3600);
  return total;
};

//Форматер таймера
export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${+minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
