import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import MyButton from '../components/UI/MyButton';
Chart.register(CategoryScale);

interface Stats {
    date: string
    count: number
}

function StatsPage() {
    let { id } = useParams()
    const [stats, setStats] = useState<Stats[]>([])

    useEffect(() => {
        const url = `http://localhost:5001/api/vacancies/responses/stats?vacancyId=${id}`
        axios.get(url).then((resp) => {
            const allResponses = resp.data
            console.log('stats', resp.data)
            setStats(allResponses)
        })
    }, [setStats])
    return (
        <>
            <div>
                <Link to={'/vakansia/' + id}>
                    <MyButton >Вернуться обратно</MyButton>
                </Link>
            </div>

            <div style={{ padding: '30px' }}>
                <Bar data={{
                    labels: stats.map((stat) => stat.date),
                    datasets: [{
                        label: 'Отклики',
                        data: stats.map((stat) => stat.count)

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