import MyButton from "../UI/MyButton";
import '../../styles/components/vacancy/VacancyList.css';
import { Link, useParams } from "react-router-dom";

export interface Vacancy {
    id: number
    title: string
    salary: number
    company: string
    city: string
    description: string
    busyness: string
    experience: string
    authorId: number
    busynessId: number
    experienceId: number
}

export interface VacancyListProps {
    vacancyarr: Vacancy[]
}

function VacancyList(props: VacancyListProps) {
    
    // let { d } = useParams();
    const VacancyArr: JSX.Element[] = props.vacancyarr.map((vacancy) => (
        <div className="vacancy-element" key={vacancy.id}>
            <h2>{vacancy.title}</h2>
            <h3>{vacancy.salary}</h3>
            <div><span>{vacancy.company}</span></div>
            <div className="city"><span>{vacancy.city}</span></div>
                        
            <Link to={'/vakansia/' + vacancy.id}>
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