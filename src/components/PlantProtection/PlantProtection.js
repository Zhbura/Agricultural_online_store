import './PlantProtection.scss';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { PageHeadingTwice } from '../PageHeading/PageHeading';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const PlantProtection = () => {
    const breadcrumbs = [
        {
            name: "Категории",
            to: "/category_plant_protection"
        },
    ];

    const categoryPpp = [
        {
            key: "herbicides",
            img: require("../../img/catalog/herbicides.png"),
            name: "Гербициды",
        },
        {
            key: "fungicides",
            img: require("../../img/catalog/fungicides.png"),
            name: "Фунгициды",
        },
        {
            key: "insecticides",
            img: require("../../img/catalog/plantProtection.png"),
            name: "Инсектициды",
        },

        {
            key: "desiccants",
            img: require("../../img/catalog/desiccants.png"),
            name: "Десиканты",
        },
        {
            key: "protectants",
            img: require("../../img/catalog/disinfectant.png"),
            name: "Протравители",
        },
        {
            key: "rodenticides",
            img: require("../../img/catalog/rodenticides.png"),
            name: "Родентициды",
        },
        {
            key: "retardants",
            img: require("../../img/catalog/retardants.png"),
            name: "Ретарданты",
        },
        {
            key: "adjuvants",
            img: require("../../img/catalog/adjuvants.png"),
            name: "Адъюванты",
        },
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="plant-protection">
                <PageHeadingTwice>Категории</PageHeadingTwice>
                <div className="plant-protection__items">
                    {categoryPpp.map((item) => (
                        <div className="plant-protection__item"
                            key={item.key}>
                            <Link to="/catalog_plant_protection" className="plant-protection__link">
                                <img src={item.img} alt={item.name} />
                                <span className="plant-protection__text">
                                    {item.name}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <SeedsCatalog />
        </>
    )
}