import { Link } from 'react-router-dom';
import '../../styles/components/navigation/NavBar.css';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import { User } from '../../@types/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

interface NavBarProps {
    user: User | null
}

function NavBar(props: NavBarProps) {

    const navigate = useNavigate()
    
    async function logout (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        console.log()
        const response = await axios.get('http://localhost:5001/api/auth/logout', {withCredentials: true}) 
        console.log(response.data)
        navigate('/')
        navigate(0)
    }

    return (
        <div className='navbar'> 
            <div className='navbar-anvar'>
                <Link to={'/'}>
                    <MyButton onClick={event => { }}>Главная</MyButton>
                </Link>
            </div>
            {/* <div className='search'>
                <MyInput size='middle' type='text' />
                <MyButton>Искать</MyButton>
            </div> */}
            <div className='auth-profile'>
            {
                    props.user ?
                        <div className='profile' >
                            <Link to={'/profile'}>
                                <MyButton onClick={event => { }}>Профиль</MyButton>
                            </Link>
                        </div>
                        : null
                }
                <div className='auth'>
                    {
                        props.user ?
                            <MyButton color='red'
                            onClick={event => logout(event)}
                            >Выйти</MyButton> 
                            :
                            <Link to={'/auth'}>
                                <MyButton onClick={event => { }}>Войти</MyButton>
                            </Link>

                    }
                </div>

                
            </div>
        </div>
    )
}

export default NavBar