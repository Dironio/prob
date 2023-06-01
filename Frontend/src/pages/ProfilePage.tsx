import '.././styles/pages/ProfilePage.css';
import MyButton from '../components/UI/MyButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/profile/ProfileList';
import { useParams } from 'react-router-dom';

function ProfilePage() {

    const [userState, setUserState] = useState();
    useEffect(() => {
        // const { id } = useParams()
        const url = 'http://localhost:5001/api/users'
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log(resp.data)
            setUserState(allResponses)
        })

    }, [setUserState])

    return (
        <div className="profile-page">
            <div className="user-info">
                <div>
                    {userState ? <UserList usersarr={userState} /> : <p>Loading</p>}
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
        </div>
    )
}

export default ProfilePage