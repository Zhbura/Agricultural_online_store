import './BrandWrap.scss';
import { Button } from '../Button/Button';
import harvest from '../../img/harvest.png';
import sheetLeft from '../../img/sheetHeadingLeft.svg';
import { Link } from 'react-router-dom';

export const BrandWrap = () => {
    return (
        <>
            <div className="brand-wrap">
                <div className="container">
                    <div className="brand-wrap__left">
                        <h1 className="brand-wrap__title">
                            <img className="sheet-heading sheet-heading_left" src={sheetLeft} alt="заголовок" />
                            Аграрный <br /><span>интернет-магазин</span>
                        </h1>
                        <p className="brand-wrap__text">Основная сфера деятельности-дистрибуция семян, средств
                            защиты растений, минеральных макро - и микроудобрений
                        </p>
                        <div className="brand-wrap__btn brand-wrap__btn_left">
                            <Button>
                                <Link to='/aboutcompany'>О компании</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="brand-wrap__right">
                        <img className="brand-wrap__main-img" src={harvest} alt="обложка журнала" />
                        <div className="brand-wrap__btn brand-wrap__btn_right">
                            <Button>
                                <Link to='/aboutcompany'>О компании</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}