import MyButton from '../components/UI/MyButton';
import '../styles/pages/VakanPage.css';

function VakanPage () {
    return (
        <div className="vakan-page">
            <div className='vacancy-header'>
                <div>
                    <h1>Прохрамисд</h1>
                    <h4>от 30 000 руб. до вычета налогов</h4>
                    <div>
                        <span className='work'>Требуемый опыт работы: 1-3 года
                        <br />Полная занятость, полный день</span>
                    </div>
                    <div className='otclick'><MyButton>aboba</MyButton></div>
                </div>
                <div className='avatar-company'>
                    <img src="https://www.divinerevelations.info/pics2/images/jesus_christ_picture_005.jpeg"/>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim iste temporibus corporis nemo earum voluptatem maiores impedit ipsum? Quidem corporis voluptatum, est obcaecati eum eius eos quo deserunt expedita!</p>
            </div>
        </div>

       
    )
}

export default VakanPage
