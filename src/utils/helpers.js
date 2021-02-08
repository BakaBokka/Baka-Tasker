
  //Генерация ключей и id для массива
  const counter = () => {
    let count = 1;
    return function () {
      return count++;
    };
  };
  
  export const generateId = counter();
