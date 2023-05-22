import MyButton from "../UI/MyButton";
import '../../styles/components/vacancy/VacancyList.css';
import { Link } from "react-router-dom";

interface Vacancy {
    title: string
    salary: number
    company: string
    city: string
}

interface VacancyListProps {
    vacancyarr: Vacancy[]
}

function VacancyList(props: VacancyListProps) {

    const VacancyArr: JSX.Element[] = props.vacancyarr.map((vacancy, i) => (
        <div className="vacancy-element" key={i}>
            <h2>{vacancy.title}</h2>
            <h3>{vacancy.salary}</h3>
            <div><span>{vacancy.company}</span></div>
            <div className="city"><span>{vacancy.city}</span></div>
            <Link to={'/vakansia/' + i}>
                <MyButton
                    color="green"
                    onClick={event => { }}
                >Посмотреть</MyButton>
            </Link>
        </div>
    ))

    return (
        <div className="vacancy-list">
            {VacancyArr}
        </div>
    )
}

export default VacancyList