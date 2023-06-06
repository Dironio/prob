import '.././styles/pages/ProfilePage.css';
import MyButton from '../components/UI/MyButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/profile/ProfileList';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { User } from '../@types/user';
import VacancyList from '../components/vacancy/VacancyList';

interface ProfilePageProps {
    user: User | null
}

function ProfilePage(props: ProfilePageProps) {

    const [vacancyState, setVacancyState] = useState();
    const navigate = useNavigate()

    async function logout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        console.log()
        const response = await axios.get('http://localhost:5001/api/auth/logout', { withCredentials: true })
        console.log(response.data)
        navigate('/')
        navigate(0)
    }


    async function roles(roleId: number) {
        if (props.user) {
            const response = await axios.put(`http://localhost:5001/api/users`, { id: props.user.id, roleId })
            navigate(0)
        }
    }


    useEffect(() => {
        if (props.user) {
            const url = `http://localhost:5001/api/vacancies/responses?userId=${props.user?.id}`
            axios.get(url).then((resp) => {
                const allResponses = resp.data
                console.log(resp.data)
                setVacancyState(allResponses)
            })
        }
    }, [props.user, setVacancyState])

    return (
        <div className="profile-page">
            {
                props.user ?
                    <>
                        <div className="user-info">
                            <div>
                                <div className='prof'>
                                    <img
                                        src="https://yt3.ggpht.com/ytc/AKedOLTN_fcvtyNjtjYLojll-wJyUZ_5VassnJPIyuu2=s900-c-k-c0x00ffffff-no-rj" alt="User Avatar" />
                                    <div>
                                        <div className="username">{props.user.firstName}</div>
                                        <div className="email">{props.user.email}</div>
                                    </div>
                                </div>
                            </div>
                            {props.user.roleId === 1 ?
                                <div>
                                    <MyButton
                                        onClick={() => roles(2)}
                                    >Стать работодателем</MyButton>
                                </div>
                                :
                                <div>
                                    <MyButton
                                        onClick={() => roles(1)}>Стать соискателем</MyButton>
                                </div>
                            }
                            <div className='exit-buttom'>
                                <MyButton color='red'
                                    onClick={event => logout(event)}
                                >Выйти</MyButton>
                            </div>
                        </div>
                        <div className="content">
                            <h2>Личный кабинет</h2>
                            <div className="section">
                                <h3>Мои данные</h3>
                                <p>Имя: {props.user.firstName}</p>
                                <p>Фамилия: {props.user.lastName}</p>
                                <p>Город: {props.user.city}</p>
                                <p>Пол: {props.user.gender}</p>
                                <Link to={'/edit'}>
                                    <MyButton>Редактировать профиль</MyButton>
                                </Link>
                            </div>
                        </div>
                        {props.user.roleId === 2 ?
                            <div>
                                <Link to={'/create'}>
                                    <MyButton color='green'>Создать вакансию</MyButton>
                                </Link>
                            </div>
                            : <></>
                        }
                        {props.user.roleId === 1 ?


                            <div className="section">
                                <h3>Мои отклики</h3>
                                {
                                    vacancyState ? <VacancyList vacancyarr={vacancyState} />
                                        : <p>Откликов нет</p>
                                }
                            </div>
                            :
                            <div className="section">
                                <h3>Мои вакансии</h3>
                                <p></p>
                            </div>
                        }
                    </>
                    : <p>Пользователь не найден</p>
            }
        </div >
    )
}



export default ProfilePage