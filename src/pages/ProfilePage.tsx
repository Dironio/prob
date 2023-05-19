import '.././styles/pages/ProfilePage.css';
import MyButton from '../components/UI/MyButton';

function ProfilePage() {
    return (
        <div className="profile-page">
            <div className="user-info">
                <div>
                    <div className='prof'>
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLTN_fcvtyNjtjYLojll-wJyUZ_5VassnJPIyuu2=s900-c-k-c0x00ffffff-no-rj" alt="User Avatar" />
                        <div>
                            <div className="username">Имя пользователя</div>
                            <div className="email">example@example.com</div>
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
        </div>
    )
}

export default ProfilePage