import '.././styles/pages/ProfilePage.css';
import MyButton from '../components/UI/MyButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/profile/ProfileList';
import { Link, useParams } from 'react-router-dom';
import { User } from '../@types/user';

interface ProfilePageProps {
    user: User | null
}

function ProfilePage(props: ProfilePageProps) {

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
                        <div className='exit-buttom'>
                            <MyButton color='red'>Выйти</MyButton>
                        </div>
                    </div>
                        <div className="content">
                            <h2>Личный кабинет</h2>
                            <div className="section">
                                <h3>Мои данные</h3>
                                <p>Имя: Иван</p>
                                <p>Фамилия: Иванов</p>
                            </div>
                            <div className="section">
                                <h3>Мои заказы</h3>
                                <p>Заказ 1: ...</p>
                            </div>
                        </div>
                        <div>
                            <Link to={'/create'}>
                            <MyButton color='green'>Создать вакансию</MyButton>
                            </Link>
                        </div>
                    </>
                        : <p>Пользователь не найден</p>
            }
        </div>
    )
}



export default ProfilePage