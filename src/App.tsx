import './css/main.css';
import Calendar from './components/Сalendar';
import "./components/Calendar.css";
import { useState } from 'react';


const now = new Date(2017, 2, 8);

const LanguageButton = ({type, onChange}) => {
  return <button type={type} onClick={() => {onChange(type)}}>
    {type}
  </button>
}

function App() {
  const [ lang, setLang ] = useState("ru");

  console.log(lang);
  

  return (
    <>
      <div>
        <LanguageButton type="enAU" onChange={setLang}/>
        <LanguageButton type="fr" onChange={setLang}/>
        <LanguageButton type="ru" onChange={setLang}/>
      </div>
  
      <Calendar date={now} lang={lang} />
  
    </>
    );
  }
  

export default App;
