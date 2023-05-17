import MyButton from "../UI/MyButton";
import '../../styles/components/vacancy/VacancyList.css';

interface Vacancy {
    title: string
    salary: number
    company: string
    city: string
}

interface VacancyListProps {
    vacancyarr: Vacancy[]
}

function VacancyList (props:VacancyListProps) {
        
    const VacancyArr: JSX.Element[] = props.vacancyarr.map(vacancy => (
        <div className="vacancy-element">
            <h2>{vacancy.title}</h2>
            <h3>{vacancy.salary}</h3>
            <div><span>{vacancy.company}</span></div>
            <div className="city"><span>{vacancy.city}</span></div>
            <MyButton color="otclick">penis</MyButton>
        </div>
    ))

    return (
        <div className="vacancy-list">
            {VacancyArr}
        </div>
    )
}

export default VacancyList