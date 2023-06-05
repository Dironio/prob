import { Link } from 'react-router-dom';
import '../../styles/components/navigation/NavBar.css';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import { User } from '../../@types/user';

interface NavBarProps {
    user: User | null
}

function NavBar(props: NavBarProps) {
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
                            <MyButton color='red'>Выйти</MyButton> 
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