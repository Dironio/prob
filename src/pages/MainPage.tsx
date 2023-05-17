import VacancyList from '../components/vacancy/VacancyList';
import './MainPage.css';

function MainPage () {
    return (
        <div>
            <div className='image-background'>
                <div className='paralax-img'><img src="https://catherineasquithgallery.com/uploads/posts/2023-01/1674276475_catherineasquithgallery-com-p-modnii-serii-fon-foto-67.jpg"/></div>
                <div className='paralax-text'><h1>Подбор персонала организации</h1></div>
            </div>
            <div>
                <VacancyList/>
            </div>
        </div>
    )
}

export default MainPage