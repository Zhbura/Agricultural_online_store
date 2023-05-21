import logo from '../../img/logo.svg';
import './Logo.scss';

export const Logo = () => {
    return <img className="logo-img" src={logo} alt="Логотип компании" />
}