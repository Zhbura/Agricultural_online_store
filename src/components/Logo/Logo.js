import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './Logo.scss';

export const Logo = () => {
    return <Link to='/'><img className="logo-img" src={logo} alt="Логотип компании" /></Link>

}