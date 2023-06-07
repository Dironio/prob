import axios from "axios";
import MyInput from "../components/UI/MyInput"
import '../styles/pages/CreatePage.css';
import { useEffect, useState } from 'react';
import MyButton from "../components/UI/MyButton";
import { User } from "../@types/user";
import { useNavigate } from "react-router-dom";

interface Busyness {
    id: number
    name: string
}

interface Experience {
    id: number
    name: string
}

interface CreatePageProps {
    user: User | null
}

function CreatePage(props: CreatePageProps) {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [salary, setSalary] = useState(1)
    const [company, setCompany] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [busynessId, setBusynessId] = useState(1)
    const [experienceId, setExperienceId] = useState(1)


    const [busyness, setBusyness] = useState<Busyness[]>([])
    const [experience, setExperience] = useState<Experience[]>([])

    async function create(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // event.preventDefault()
        const response = await axios.post('http://localhost:5001/api/vacancies',
            { title, salary, company, city, description, busynessId, experienceId, authorId: props.user?.id })
        console.log(response.data)
        navigate('/profile')
        navigate(0)
    }

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
            <form className="create-page">
                <div className="main">
                    <h1>Страница создания вакансии</h1>
                </div>
                <div>
                    <label htmlFor="title">Название вакансии</label>
                    <MyInput type="text" id='title'
                        onChange={event => setTitle(event.target.value)}
                    ></MyInput>
                </div>
                <div>
                    <label htmlFor="salary">Заработная плата</label>
                    <MyInput type="text" id='salary'
                        onChange={event => setSalary(Number(event.target.value))} />
                </div>
                <div>
                    <label htmlFor="company">Компания работодатель</label>
                    <MyInput type="text" id='company'
                        onChange={event => setCompany(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="city">Город</label>
                    <MyInput type="text" id='city'
                        onChange={event => setCity(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Описание вакансии</label>
                    <textarea id='description'
                        onChange={event => setDescription(event.target.value)}></textarea>
                </div>
                <div className="busyness">
                    <label htmlFor="busyness">Занятость</label>
                    <select className="busyness-style"
                        onChange={event => setBusynessId(Number(event.target.value))}>
                        {BusynessArr}
                    </select>
                </div>
                <div className="experience">
                    <label htmlFor="experience">Занятость</label>
                    <select className="experience-style"
                        onChange={event => setExperienceId(Number(event.target.value))}>
                        {ExperienceArr}
                    </select>
                </div>
                <div className="button-create">
                    <MyButton color="green"
                        onClick={create}
                    >Создать вакансию</MyButton>
                </div>
            </form>
        </div>
    )
}

export default CreatePage