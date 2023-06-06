import MyButton from '../UI/MyButton';
import '../../styles/components/vacancy/VacancyList.css';
import { Vacancy } from './VacancyList';
import { VacancyListProps } from './VacancyList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../@types/user';

interface VacancyProbProps {
    vacancy: Vacancy
    user: User | null
}

function VacancyProb(props: VacancyProbProps) {

    async function responses() {
        const responses = await axios.post('http://localhost:5001/api/vacancies/responses',
            { userId: props.user?.id, vacancyId: props.vacancy.id })
        console.log(responses.data)
    }

    return (

        <div>
            <div className='vacancy-header'>
                <div>
                    <h1>{props.vacancy.title}</h1>
                    <h4>от {props.vacancy.salary} до вычета налогов</h4>
                    <div>
                        <span className='work'>Требуемый опыт работы: {props.vacancy.experience}
                            <br /> Занятость: {props.vacancy.busyness}
                            <br />Город: {props.vacancy.city}
                            <br />Компания: {props.vacancy.company}</span>
                    </div>

                </div>
                <div className='avatar-company'>
                    <img src="https://www.divinerevelations.info/pics2/images/jesus_christ_picture_005.jpeg" />
                </div>
            </div>
            <div>
                <p>{props.vacancy.description}</p>
                <div className='otclick'>
                    <MyButton
                        onClick={responses}
                    >Откликнуться</MyButton>
                </div>
            </div>
        </div>

    )
}

export default VacancyProb