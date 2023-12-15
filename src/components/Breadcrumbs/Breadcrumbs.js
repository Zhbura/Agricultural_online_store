import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

export const Breadcrumbs = ({ breadcrumbs }) => {

    return (
        <>
            <div className="bread-crumbs">
                <ul className="bread-crumbs__list-items">
                    <li className="bread-crumbs__list-item"><Link to="/Agricultural_online_store" className="bread-crumbs__link">Главная</Link></li>
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;
                        return isLast ? (
                            <li className="bread-crumbs__list-item bread-crumbs__list-item_last" key={index}>{crumb.name}</li>)
                            : (<li className="bread-crumbs__list-item" key={index}><Link to={crumb.to} className="bread-crumbs__link">{crumb.name}</Link></li>)
                    })}
                </ul>
            </div>
        </>
    )
}

// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// export const Breadcrumbs = () => {
//     const location = useLocation()

//     let currentLink = ''

//     const crumbs = location.pathname.split('/')
//         .filter(crumb => crumb !== '')
//         .map(crumb => {
//             currentLink += `/${crumb}`

//             return (
//                 <div className="crumb" key={crumb}>
//                     <Link to="/">Главная</Link>
//                     <Link to={currentLink}>{crumb}</Link>
//                 </div>
//             )
//         })

//     return (
//         <div className="breadcrumbs">
//             {crumbs}
//         </div>
//     )
// }