import { PageHeadingTwice } from '../PageHeading/PageHeading';
import './PartnersComp.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { partners } from '../../partnersData';

export const PartnersComp = () => {
    const breadcrumbs = [
        {
            name: "Партнёры",
            to: "/Agricultural_online_store/partners"
        },
    ];
    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="partners-comp">
                <div className="container">
                    <PageHeadingTwice>Партнёры</PageHeadingTwice>
                    <div className="partners-comp__items">
                        {partners.map(partner => (
                            <div className="partners-comp__item" key={partner.id}>
                                <div className="partners-comp__item_top">
                                    <div className="partner-logo">
                                        <img src={partner.img} alt={partner.alt} />
                                    </div>
                                    <div className="partners-comp__title">{partner.title}</div>
                                </div>
                                <div className="partners-comp__text">{partner.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}