import axios from "axios";
import MyInput from "../components/UI/MyInput"
import '../styles/pages/CreatePage.css';
import { useEffect, useState } from 'react';
import MyButton from "../components/UI/MyButton";

interface Busyness {
    id: number
    name: string
}

interface Experience {
    id: number
    name: string
}



function CreatePage() {
    const [busyness, setBusyness] = useState<Busyness[]>([])
    useEffect(() => {
        const url = `http://localhost:5001/api/busyness`
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log(resp.data)
            setBusyness(allResponses)
        })
    }, [setBusyness])

    const [experience, setExperience] = useState<Experience[]>([])
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
                    <MyInput type="text" id='title'></MyInput>
                </div>
                <div>
                    <label htmlFor="salary">Заработная плата</label>
                    <MyInput type="text" id='salary' />
                </div>
                <div>
                    <label htmlFor="company">Компания работодатель</label>
                    <MyInput type="text" id='company' />
                </div>
                <div>
                    <label htmlFor="city">Город</label>
                    <MyInput type="text" id='city' />
                </div>
                <div>
                    <label htmlFor="description">Описание вакансии</label>
                    <MyInput type="text" id='description' />
                </div>
                <div>
                    <label htmlFor="busyness">Занятость</label>
                    <select>
                        {BusynessArr}
                    </select>
                </div>
                <div>
                    <label htmlFor="experience">Занятость</label>
                    <select>
                        {ExperienceArr}
                    </select>
                </div>
                <div>
                    <MyButton color="green">Создать вакансию</MyButton>
                </div>
            </form>
        </div>
    )
}

export default CreatePage