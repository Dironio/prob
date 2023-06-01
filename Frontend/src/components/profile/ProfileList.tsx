import MyButton from "../UI/MyButton";
import '../../styles/pages/ProfilePage.css';
import '../../styles/components/vacancy/VacancyList.css';
import { Link } from "react-router-dom";

interface Users {
    first_name: string
    last_name: string
    email: string
    password: string
    city: string
    gender: string
    img: string
}

interface UserProps {
    usersarr: Users[]
}

function UserList(props: UserProps) {
    const UserArr: JSX.Element[] = props.usersarr.map((user, i) => (
        <div>
            <img
                src="https://yt3.ggpht.com/ytc/AKedOLTN_fcvtyNjtjYLojll-wJyUZ_5VassnJPIyuu2=s900-c-k-c0x00ffffff-no-rj" alt="User Avatar" />
            <div className="username">{user.first_name}{user.last_name}</div>
            <div className="email">{user.email}</div>
        </div>
    ))
    return (
        <div className='prof'>
            {UserArr}
        </div>
    )

    // const VacancyArr: JSX.Element[] = props.usersarr.map((user, i) => (
    //     <div className="vacancy-element" key={i}>
    //         <h2>{vacancy.title}</h2>
    //         <h3>{vacancy.salary}</h3>
    //         <div><span>{vacancy.company}</span></div>
    //         <div className="city"><span>{vacancy.city}</span></div>
    //         <Link to={'/vakansia/' + i}>
    //             <MyButton
    //                 color="green"
    //                 onClick={event => { }}
    //             >Посмотреть</MyButton>
    //         </Link>
    //     </div>
    // ))

    // return (
    //     <div className="vacancy-list">
    //         {UserArr}
    //     </div>
    // )
}

export default UserList