import MyButton from '../UI/MyButton';
import '../../styles/components/vacancy/VacancyList.css';
import { Vacancy } from './VacancyList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../@types/user';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/pages/VacancyPage.css';

interface VacancyProbProps {
    vacancy: Vacancy
    user: User | null
}

function VacancyProb(props: VacancyProbProps) {

    const navigate = useNavigate()
    const [users, setUsers] = useState<User[]>([])

    const UserArr: JSX.Element[] = users.map((user) => (
        <div>
            <div className='name-email'
            key={user.id}><img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png" alt="User Avatar" />
                <div>
                    <div className='name'><p>{user.firstName} {user.lastName}</p></div>
                    <div className='email'><p>Почта для связи: {user.email}</p></div>
                </div>
            </div>
            <div className='description'>
                <p>Резюме: {user.description}</p>
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
                console.log('vacancy', resp.data)
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
                        <div className='description-vac'>
                            <span className='work'>Требуемый опыт работы: {props.vacancy.experience}
                                <br /> Занятость: {props.vacancy.busyness}
                                <br />Город: {props.vacancy.city}
                                <br />Компания: {props.vacancy.company}
                                <br />Описание: {props.vacancy.description}</span>
                            <div>
                                {props.vacancy.authorId === props.user?.id ?
                                    <div className='delete-button'>
                                        <div >
                                            <MyButton color='red'
                                                onClick={author}
                                            >Удалить</MyButton>
                                        </div>
                                        <div>
                                            <Link to={`/editvac/${props.vacancy.id}`}>
                                                <MyButton color='blue'>Редактировать</MyButton>
                                            </Link>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        {
                                            props.user?.id ?
                                                <div className='otclick-button'>
                                                    <Link to={'/profile'}>
                                                        <MyButton
                                                            onClick={responses}
                                                        >Откликнуться</MyButton>
                                                    </Link>
                                                </div>
                                                :
                                                <div>
                                                    <h4>Авторизируйтесь, чтобы откликнуться</h4>
                                                    <Link to={'/auth'}>
                                                        <MyButton onClick={event => { }}>Авторизироваться</MyButton>
                                                    </Link>
                                                </div>
                                        }
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
                            users.length ? UserArr
                                :
                                <div>На данный момент откликов нет</div>
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