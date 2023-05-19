import VacancyList from '../components/vacancy/VacancyList';
import '../styles/pages/MainPage.css'

function MainPage() {
  const vacancyarray = [
    {
      title: "Название вакансии 1",
      salary: 30000,
      company: "Название компании",
      city: "Город"
    },
    {
      title: "Название вакансии 2",
      salary: 30000,
      company: "Название компании",
      city: "Город"
    },
    {
      title: "Название вакансии 3",
      salary: 30000,
      company: "Название компании",
      city: "Город"
    }
  ]

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
        <VacancyList vacancyarr={vacancyarray} />
      </div>
      <div className='info'>
        <h1>Автоматизированная система подбора персонала организации</h1>
        <h1>2023</h1>
      </div>
    </div>
  )
}

export default MainPage