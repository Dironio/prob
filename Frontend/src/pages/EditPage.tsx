import axios from 'axios';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput'
import '../styles/pages/EditPage.css';
import { User } from '../@types/user';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface EditPageProps {
    user: User | null
}

function EditPage(props: EditPageProps) {

    const [firstName, setFirstName] = useState(props.user?.firstName)
    const [lastName, setLastName] = useState(props.user?.lastName)
    const [city, setCity] = useState(props.user?.city)
    const [gender, setGender] = useState(props.user?.gender)
    const [description, setDescription] = useState(props.user?.description)
    const navigate = useNavigate()

    async function update(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if ( firstName || lastName || city || gender || description) {
            const response = await axios.put(`http://localhost:5001/api/users`,
                { id: props.user?.id, firstName, lastName, city, gender, description })
            console.log(response.data)
            // console.log(gender)
            navigate('/profile')
            navigate(0)
        }         
    }

    return (
        <div>
            <form className='edit-page'>
                <div className='main'>
                    <h1>Редактирование профиля</h1>
                </div>
                <div>
                    <label htmlFor="firstName">Имя пользователя</label>
                    <MyInput type='text' id='firstName'
                        onChange={event => setFirstName(event.target.value)} 
                        value={firstName}/>
                </div>
                <div>
                    <label htmlFor="lastName">Фамилия пользователя</label>
                    <MyInput type='text' id='lastName'
                        onChange={event => setLastName(event.target.value)} 
                        value={lastName}/>
                </div>
                <div>
                    <label htmlFor="city">Город</label>
                    <MyInput type='text' id='city'
                        onChange={event => setCity(event.target.value)} 
                        value={city}/>
                </div>
                <div className='gender'>
                    <label htmlFor="gender">Пол</label>
                    <select className='gender-style'
                    onChange={event => setGender(event.target.value)}
                    value={gender}>
                        <option value="М">М</option>
                        <option value="Ж">Ж</option>
                        <option value=''>Не указан</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Резюме</label>
                    <textarea id='description'
                        onChange={event => setDescription(event.target.value)}
                        value={description}></textarea>
                </div>
                <div className='button'>
                    <MyButton color="green"
                        onClick={update}
                        type='button'
                    >Сохранить изменения</MyButton>
                </div>
            </form>
        </div>
    )
}

export default EditPage