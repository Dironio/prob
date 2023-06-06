import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput'
import '../styles/pages/EditPage.css';

function EditPage() {
    return (
        <div>
            <form className='edit-page'>
                <div>
                    <h1>Редактирование профиля</h1>
                </div>
                <div>
                    <label htmlFor="">Имя пользователя</label>
                    <MyInput type='text' />
                </div>
                <div>
                    <label htmlFor="">Фамилия пользователя</label>
                    <MyInput type='text' />
                </div>
                <div>
                    <label htmlFor="">Город</label>
                    <select name="" id=""></select>
                </div>
                <div>
                    <label htmlFor="">Пол</label>
                    <select name="" id=""></select>
                </div>
                <div>
                    <MyButton color="green"
                    >Сохранить изменения</MyButton>
                </div>
            </form>
        </div>
    )
}

export default EditPage