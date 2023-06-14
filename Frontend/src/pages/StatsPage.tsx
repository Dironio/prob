import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../styles/pages/StatsPage.css'
import { CategoryScale } from 'chart.js';
import MyButton from '../components/UI/MyButton';
Chart.register(CategoryScale);

interface Stats {
    date: string
    count: number
}

function StatsPage() {
    let { id } = useParams()
    const [stats, setStats] = useState<any>({})
    const a = new Date()
    const dats : any = []
    

    for (let i = 0; i < 31; i++) {
        const date = new Date(Number(a) - i * 24 * 3600 * 1000) 
        const strdata = `${date.getFullYear()}-${('00' + (date.getMonth()+1)).slice(-2)}-${('00' + date.getDate()).slice(-2)}`
        dats.push(strdata)
    }

    dats.reverse()

    useEffect(() => {
        const url = `http://localhost:5001/api/vacancies/responses/stats?vacancyId=${id}`
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log('stats', resp.data)
            const datesDict : any = {}
            allResponses.map((stat:any) => datesDict[stat.date] = stat.count)
            setStats(datesDict)

            console.log(datesDict)
            console.log(dats)
        })
    }, [setStats])
    return (
        <>
            <div className='stats-button'>
                <Link to={'/vakansia/' + id}>
                    <MyButton >Вернуться</MyButton>
                </Link>
            </div>

            <div className='stats-bar'>
                
                <Bar 
                
                data={{
                    labels: dats,
                    datasets: [{
                        label: 'Отклики',
                        data: dats.map((date:any) => Number(stats[date] as any) || 0)
                    }]
                }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </>
    )
}

export default StatsPage