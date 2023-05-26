import './PlantProtection.scss';
import herbicides from '../../img/catalog/herbicides.png';
import fungicides from '../../img/catalog/fungicides.png';
import plantProtection from '../../img/catalog/plantProtection.png';
import desiccants from '../../img/catalog/desiccants.png';
import disinfectant from '../../img/catalog/disinfectant.png';
import rodenticides from '../../img/catalog/rodenticides.png';
import retardants from '../../img/catalog/retardants.png';
import adjuvants from '../../img/catalog/adjuvants.png';
import { SeedsCatalog } from '../SeedsCatalog/SeedsCatalog';
import { PageHeadingTwice } from '../PageHeading/PageHeading';

export const PlantProtection = () => {
    return (
        <>
            {/* <BreadCrumbs /> */}
            <div className="plant-protection">
                <PageHeadingTwice>Средства защиты растений</PageHeadingTwice>
                <div className="plant-protection__items">
                    <div className="plant-protection__item">
                        <img src={herbicides} alt="Гербициды" />
                        <div className="plant-protection__text">
                            Гербициды
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={fungicides} alt="Фунгициды" />
                        <div className="plant-protection__text">
                            Фунгициды
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={plantProtection} alt="plantProtection" />
                    </div>
                    <div className="plant-protection__item">
                        <img src={desiccants} alt="Десиканты" />
                        <div className="plant-protection__text">
                            Десиканты
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={disinfectant} alt="disinfectant" />
                        <div className="plant-protection__text">
                            Протравители
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={rodenticides} alt="Родентициды" />
                        <div className="plant-protection__text">
                            Родентициды
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={retardants} alt="Ретарданты" />
                        <div className="plant-protection__text">
                            Ретарданты
                        </div>
                    </div>
                    <div className="plant-protection__item">
                        <img src={adjuvants} alt="Адъюванты" />
                        <div className="plant-protection__text">
                            Адъюванты
                        </div>
                    </div>
                </div>
            </div>
            <SeedsCatalog />
        </>
    )
}