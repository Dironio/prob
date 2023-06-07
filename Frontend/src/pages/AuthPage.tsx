import axios from 'axios';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import '../styles/pages/AuthPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {

    const [zareg, setNeZareg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    async function login (event: React.FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault()
            console.log(email, password)
            const response = await axios.post('http://localhost:5001/api/auth/login', {email, password}, {withCredentials: true}) 
            console.log(response.data)
            navigate('/profile')
            navigate(0)
        } catch (error) {
            alert('Введены некорректные данные')
        }
    }

    async function singup(event: React.FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault()
            console.log(name, email, password)
            const response = await axios.post('http://localhost:5001/api/auth/signup', {firstName: name, email, password}, {withCredentials: true})
            console.log(response.data)
        } catch (error) {
            alert('Введены некорректные данные')
        }
    }

    return (
        <div className='auth-page'>
            <form className='auth' onSubmit={zareg ? login : singup} >
                <div>
                    <div>
                        {zareg ? <h1>Вход</h1> : <h1>Регистрация</h1>}
                    </div>
                </div>
                <div>
                    {zareg ? '' : <MyInput type='text' placeholder='Имя' onChange={event => setName(event.target.value)}></MyInput>}
                    <MyInput type='email' placeholder='Email' onChange={event => setEmail(event.target.value)}></MyInput>
                    <MyInput type='password' placeholder='Пароль'onChange={event => setPassword(event.target.value)}></MyInput>
                </div>
                <div className='auth-button'>
                    <div>
                        <MyButton color='green' type='button'
                            onClick={() => setNeZareg(prev => !prev)}
                        >{zareg ? 'У меня нет аккаунта' : 'У меня есть аккаунт'}</MyButton>
                    </div>
                    <div>
                        <MyButton color='blue'
                        >{zareg ? 'Войти' : 'Зарегистрироваться'}</MyButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AuthPage