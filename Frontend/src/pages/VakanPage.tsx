import MyButton from '../components/UI/MyButton';
import VacancyProb from '../components/vacancy/Vacancy';
import '../styles/pages/VakanPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function VakanPage() {
    const [vacancyState, setVacancyState] = useState();
    let { id } = useParams();
    console.log(id)
    useEffect(() => {
        const url = `http://localhost:5001/api/vacancies/${id}`
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log(resp.data)
            setVacancyState(allResponses)
        })
    }, [setVacancyState])

    return (
        <div className="vakan-page">
            {vacancyState ? <VacancyProb vacancy={vacancyState} /> : <p>Загрузка</p>}
        </div>
    )
}

export default VakanPage
