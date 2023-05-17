import MyButton from "../UI/MyButton";
import './VacancyList.css';

function VacancyList () {
    return (
        <div className="vacancy-list">
            <div className="vacancy-element">
                <h2>Пусси-бой</h2>
                <h3>300k/ns</h3>
                <div><span>ООО НефтеГазоТехнологии</span></div>
                <div className="city"><span>Оренбург</span></div>
                <MyButton color="otclick">penis</MyButton>
            </div>
            <div className="vacancy-element">
                <h2>Vagner</h2>
                <h3>1kk/ns</h3>
                <div><span>Лето и арбалеты</span></div>
                <div className="city"><span>Россия</span></div>
                <MyButton color="otclick">penis</MyButton>
            </div>
            <div className="vacancy-element">
                <h2>NatsBoll</h2>
                <h3>228k/ns</h3>
                <div><span>Белое движение</span></div>
                <div className="city"><span>Мир</span></div>
                <MyButton color="otclick">penis</MyButton>
            </div>
        </div>
    )
}

export default VacancyList