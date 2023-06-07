import MyButton from '../UI/MyButton';
import '../../styles/components/vacancy/VacancyList.css';
import { Vacancy } from './VacancyList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../@types/user';
import { useNavigate } from 'react-router-dom';
import '../../styles/pages/VacancyPage.css';

interface VacancyProbProps {
    vacancy: Vacancy
    user: User | null
}

function VacancyProb(props: VacancyProbProps) {

    const navigate = useNavigate()
    const [users, setUsers] = useState<User[]>([])

    const UserArr: JSX.Element[] = users.map((user) => (
        <div key={user.id}><img src="http://bfoto.ru/foto/river/bfoto_ru_4763.jpg" alt="User Avatar" />
            <div>
                <div className='name'><p>{user.firstName} {user.lastName}</p></div>
                <div className='email'><p>Почта для связи: {user.email}</p></div>
            </div>
        </div>
    ))

    async function responses() {
        const responses = await axios.post('http://localhost:5001/api/vacancies/responses',
            { userId: props.user?.id, vacancyId: props.vacancy.id })
        console.log(responses.data)
    }

    async function author(event: any) {
        const response = await axios.delete(`http://localhost:5001/api/vacancies/${props.vacancy.id}`)
        navigate('/')
        navigate(0)
    }

    useEffect(() => {
        if (props.vacancy) {
            const url = `http://localhost:5001/api/vacancies/responses?vacancyId=${props.vacancy?.id}`
            axios.get(url).then((resp) => {
                const allResponses = resp.data
                console.log(' аищиф ', resp.data)
                setUsers(allResponses)
            })
        }
    }, [props.vacancy, setUsers])



    return (

        <div>
            <div>
                <div className='vacancy-header'>
                    <div>
                        <h1>{props.vacancy.title}</h1>
                        <h4>от {props.vacancy.salary} до вычета налогов</h4>
                        <div>
                            <span className='work'>Требуемый опыт работы: {props.vacancy.experience}
                                <br /> Занятость: {props.vacancy.busyness}
                                <br />Город: {props.vacancy.city}
                                <br />Компания: {props.vacancy.company}
                                <br />Описание: {props.vacancy.description}</span>
                            <div>
                                {props.vacancy.authorId === props.user?.id ?
                                    <div className='delete'>
                                        <MyButton color='red'
                                            onClick={author}
                                        >Удалить</MyButton>
                                    </div>
                                    :
                                    <div className='otclick'>
                                        <MyButton
                                            onClick={responses}
                                        >Откликнуться</MyButton>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                    <div className='avatar-company'>
                        <img src="https://cdn.icon-icons.com/icons2/3237/PNG/512/facebook_jobs_facebook_social_media_application_brand_job_icon_197314.png" />
                    </div>
                </div>
            </div>
            {props.user?.id === props.vacancy.authorId ?
                <div>
                    <div>
                        <h3>Откликнулись на вакансию</h3>
                    </div>
                    <div className='otclick'>
                        {
                            users ? UserArr
                                :
                                <></>
                        }
                    </div>
                </div>
                :
                <></>
            }
        </div>

    )
}

export default VacancyProb