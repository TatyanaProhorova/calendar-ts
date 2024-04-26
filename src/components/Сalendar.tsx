
import { ru, enAU, fr } from 'date-fns/locale';

import { Calendar as ReactCalendar } from "react-calendar";

import { useMemo, useState } from 'react';

function Calendar(props) {  
  const{ date, lang } = props;
  const backgroundColor="whitesmoke"; 

  const [value1, onChange1] = useState(new Date()); // useState для 1 календаря
  const [value2, onChange2] = useState(new Date(date)); // useState для 2 календаря


  console.log('lang', lang, 'date, date');
//мемоизация - для сохранения и использования вычесленных значений;

//useMemo (data) => /// return N; запоминаем значение
//  useMemo смотрит на значения массива предыдущего запуска функции и
//  значения массива текушего запуска функции (массив - это 2-й параметр,
//  а 1-й параметр - это функция)
//useCallback () => {} (data) => /// return callback; запоминаем созданную функцию
//React.memo (data) => /// return component;верстку возвращаемую из React-компонента;
// const CalendarMemo = React.memo(Calendar); // в случае  React-компонента массив зависимостей - это 
// propsЫ - в этот hook оборачивают глупые компоненты - где почти нет логики, но есть
// много верстки - jsx

  const locale = useMemo( () => {
    let result = ru;

    switch(lang) {
      case 'en': {
        result = enAU;
        break;
      }
      case 'fr': {
        result = fr;
        break;
      }  
      default: {
        result = ru;
      }
    }
    return result;
    }, [lang]
  );

  return (
  <> 
    <div style={{background: backgroundColor}}>
      <ReactCalendar  onChange={onChange1} value={value1} />
    </div>

    <div>
      <ReactCalendar onChange={onChange2} value={value2}/>
    </div>
  </>
  );
}
 
export default Calendar;



// ПРИМЕР ПОДКЛЮЧЕНИЯ КАЛЕНДАРЯ Calendar } from "react-calendar";
// function MyApp() {
//   const [value, onChange] = useState<Value>(new Date());

  // return (
  //   <div>
  //     <Calendar onChange={onChange} value={value}/>
  //   </div>
  // );
// }



// Компонент должен иметь один атрибут date,
//  в котором он ожидает текущую дату, объект Date.

// Дата, переданная в атрибуте date, должна быть выделена классом ui-datepicker-today.

// Если месяц начинается не с понедельника, то необходимо показать даты предыдущего месяца
//  в этой неделе и пометить их классом ui-datepicker-other-month. Аналогично,
//  если месяц заканчивается не в воскресенье, то неделю нужно добить датами следующего
//  месяца и так же их пометить классом ui-datepicker-other-month.

// День недели на русском языке необходимо поместить в тег div.ui-datepicker-material-day,
//  дату в div.ui-datepicker-material-day-num, месяц на русском языке в родительном падеже
//  в тег div.ui-datepicker-material-month, год в тег div.ui-datepicker-material-year.

// Также текущий месяц на русском языке в именительном падеже необходимо поместить
// в тег span.ui-datepicker-month, а год в тег span.ui-datepicker-year

/* <div class="ui-datepicker">
  <div class="ui-datepicker-material-header">
    <div class="ui-datepicker-material-day">Среда</div>
    <div class="ui-datepicker-material-date">
      <div class="ui-datepicker-material-day-num">8</div>
      <div class="ui-datepicker-material-month">Марта</div>
      <div class="ui-datepicker-material-year">2017</div>
    </div>
  </div>
  <div class="ui-datepicker-header">
    <div class="ui-datepicker-title">
      <span class="ui-datepicker-month">Март</span>&nbsp;<span class="ui-datepicker-year">2017</span>
    </div>
  </div>
  <table class="ui-datepicker-calendar">
    <colgroup>
              <col> </col>
          <col> </col>
          <col> </col>
          <col> </col>
          <col> </col>
      <col>
      <col>
      <col>
      <col>
      <col>
      <col class="ui-datepicker-week-end">
      <col class="ui-datepicker-week-end">
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ui-datepicker-other-month">27</td>
        <td class="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td class="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr>
      <!-- остальные недели -->
    </tbody>
  </table>
</div> */
