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
                        {zareg ? <h1>Login</h1> : <h1>Registration</h1>}
                    </div>
                </div>
                <div>
                    {zareg ? '' : <MyInput type='text' placeholder='Name'></MyInput>}
                    <MyInput type='email' placeholder='Email'></MyInput>
                    <MyInput type='password' placeholder='Password'></MyInput>
                </div>
                <div>
                    <MyButton color='otclick'
                        onClick={() => setNeZareg(prev => !prev)}
                    >{zareg ? 'У меня нет аккаунта' : 'У меня есть аккаунт'}</MyButton>
                    <MyButton color='rega'>Registration</MyButton>
                    {zareg + ''}
                </div>
            </div>
        </div>
    )
}

export default AuthPage