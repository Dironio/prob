import { useEffect, useState } from 'react';
import VacancyList from '../components/vacancy/VacancyList';
import '../styles/pages/MainPage.css'
import axios from 'axios';

function MainPage() {

  const [vacancyState, setVacancyState] = useState([]);
  useEffect(() => {
    const url = 'http://localhost:5001/api/vacancies'
    axios.get(url).then((resp) => {
      const allResponses = resp.data
      console.log(resp.data)
      setVacancyState(allResponses)
    })
  }, [setVacancyState])
  
  return (
    <div>
      <div className='image-background'>
        <img src="https://catherineasquithgallery.com/uploads/posts/2023-01/1674276475_catherineasquithgallery-com-p-modnii-serii-fon-foto-67.jpg" />
        <h1>Подбор персонала организации</h1>
      </div>
      <div className='vacansiya'>
        <h2>Доступные вакансии</h2>
      </div>
      <div>
        {vacancyState.length ? <VacancyList vacancyarr={vacancyState} /> : <p>Вакансии загружаются или они не найдены</p>}
      </div>
      <div className='info'>
        <h1>Автоматизированная система подбора персонала организации</h1>
        <h1>2023</h1>
      </div>
    </div>
  )
}

export default MainPage