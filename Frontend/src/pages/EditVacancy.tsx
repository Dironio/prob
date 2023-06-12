import { useNavigate, useParams} from "react-router-dom";
import MyInput from "../components/UI/MyInput";
import { useEffect, useState } from 'react';
import axios, { all } from "axios";
import MyButton from "../components/UI/MyButton";
import { Vacancy } from "../components/vacancy/VacancyList";

interface Busyness {
    id: number
    name: string
}

interface Experience {
    id: number
    name: string
}

function EditVacancy () {
    let { id } = useParams()
    const [vacancyEdit, setVacancyEdit] = useState()
    
    const [title, setTitle] = useState('')
    const [salary, setSalary] = useState(1)
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [busynessId, setBusynessId] = useState(1)
    const [experienceId, setExperienceId] = useState(1)

    const [busyness, setBusyness] = useState<Busyness[]>([])
    const [experience, setExperience] = useState<Experience[]>([])

    const navigate = useNavigate()

    async function update(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const response = await axios.put(`http://localhost:5001/api/vacancies`,
            { id, title, salary, company, city, description, busynessId, experienceId })
        console.log(response.data)
        // console.log(gender)
        navigate(`/vakansia/${id}`)
        navigate(0)  
    }

    useEffect(() => {
        const url = `http://localhost:5001/api/vacancies/${id}`
        axios.get<Vacancy>(url).then((resp) => {
            const allResponses = resp.data
            setTitle(allResponses.title)
            setSalary(allResponses.salary)
            setCompany(allResponses.company)
            setCity(allResponses.city)
            setDescription(allResponses.description)
            setBusynessId(allResponses.busynessId)
            setExperienceId(allResponses.experienceId)
        })
    }, [setVacancyEdit])

    useEffect(() => {
        const url = 'http://localhost:5001/api/busyness'
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log(resp.data)
            setBusyness(allResponses)
        })
    }, [setBusyness])


    useEffect(() => {
        const url = `http://localhost:5001/api/experience`
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log(resp.data)
            setExperience(allResponses)
        })
    }, [setExperience])

        const BusynessArr: JSX.Element[] = busyness.map((buss) => {
        return <option value={buss.id} key={buss.id}>{buss.name}</option>
    })

    const ExperienceArr: JSX.Element[] = experience.map((exp) => {
        return <option value={exp.id} key={exp.id}>{exp.name}</option>
    })    

    return (
        <div>
            <form className="create-page" >
                <div className="main">
                    <h1>Страница редактирования вакансии</h1>
                </div>
                <div>
                    <label htmlFor="title">Название вакансии</label>
                    <MyInput type="text" id='title'
                        onChange={event => setTitle(event.target.value)}
                        value={title}
                    ></MyInput>
                </div>
                <div>
                    <label htmlFor="salary">Заработная плата</label>
                    <MyInput type="text" id='salary'
                        onChange={event => setSalary(Number(event.target.value))}
                        value={salary}/>
                </div>
                <div>
                    <label htmlFor="company">Компания работодатель</label>
                    <MyInput type="text" id='company'
                        onChange={event => setCompany(event.target.value)}
                        value={company}/>
                </div>
                <div>
                    <label htmlFor="city">Город</label>
                    <MyInput type="text" id='city'
                        onChange={event => setCity(event.target.value)}
                        value={city}/>
                </div>
                <div>
                    <label htmlFor="description">Описание вакансии</label>
                    <textarea id='description'
                        onChange={event => setDescription(event.target.value)}
                        value={description}></textarea>
                </div>
                <div className="busyness">
                    <label htmlFor="busyness">Занятость</label>
                    <select className="busyness-style"
                        onChange={event => setBusynessId(Number(event.target.value))}
                        value={busynessId}>
                        {BusynessArr}
                    </select>
                </div>
                <div className="experience">
                    <label htmlFor="experience">Занятость</label>
                    <select className="experience-style"
                        onChange={event => setExperienceId(Number(event.target.value))}
                        value={experienceId}>
                        {ExperienceArr}
                    </select>
                </div>
                <div className="button-create">
                    <MyButton color="green"
                        onClick={update}
                    >Сохранить изменения</MyButton>
                </div>
            </form>
        </div>
    )
}

export default EditVacancy