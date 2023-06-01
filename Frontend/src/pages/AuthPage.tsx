import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import '../styles/pages/AuthPage.css';
import { useState } from 'react';

function AuthPage() {

    const [zareg, setNeZareg] = useState(false)

    return (
        <div className='auth-page'>
            <div className='auth'>
                <div>
                    <div>
                        {zareg ? <h1>Вход</h1> : <h1>Регистрация</h1>}
                    </div>
                </div>
                <div>
                    {zareg ? '' : <MyInput type='text' placeholder='Имя'></MyInput>}
                    <MyInput type='email' placeholder='Email'></MyInput>
                    <MyInput type='password' placeholder='Пароль'></MyInput>
                </div>
                <div className='auth-button'>
                    <div>
                        <MyButton color='green'
                            onClick={() => setNeZareg(prev => !prev)}
                        >{zareg ? 'У меня нет аккаунта' : 'У меня есть аккаунт'}</MyButton>
                    </div>
                    <div>
                        <MyButton color='blue'>Зарегистрироваться</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage