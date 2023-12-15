import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Error.scss';

export const Error = () => {
    return (
        <>
            <div className="wrap-error">
                <div className="error">
                    <div className="error__numbers">
                        <div className="error__number error__number_small error__number_left"><span className="error__span">4</span></div>
                        <div className="error__number error__number_big"><span className="error__span error__span_big">0</span></div>
                        <div className="error__number error__number_small error__number_right"><span className="error__span">4</span></div>
                    </div>
                    <h2 className="error__heading">Извините страница не найдена</h2>
                    <p className="error__text">Но не волнуйтесь, время от времени, это случается.</p>
                    <p className="error__text">Скорее всего, вы ввели не правильный адрес страницы.</p>
                    <div className="error__btn">
                        <Button><Link to="/Agricultural_online_store">Вернуться на главную страницу</Link></Button>
                    </div>
                </div>
            </div>
        </>
    )
}