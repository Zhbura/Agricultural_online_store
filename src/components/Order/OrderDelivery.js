import { DropdownOrder } from "../Dropdown/DropdownOrder"
import { InputContacts } from "../Inputs/InputContacts";

export const OrderDelivery = ({ region, setRegion, city, setCity, department, setDepartment, postcode, setPostcode}) => {
    const regions = ["Московская область", "Ленинградская область", "Тверская область"];
    const cities = ["Москва", "Санкт-Петербург", "Тверь"];
    const departments = ['№ 1', '№ 2', '№ 3'];

    return (
        <>
            <div className="order__delivery">
                <h4 className="order__heading">Доставка</h4>
                <div className="wrap-contacts wrap-contacts_margin">
                    <DropdownOrder
                        array={regions}
                        selected={region}
                        setSelected={setRegion}
                        initialValue="Область" />
                    <DropdownOrder
                        array={cities}
                        selected={city}
                        setSelected={setCity}
                        initialValue="Город" />
                </div>
                <div className="wrap-contacts">
                    <DropdownOrder
                        array={departments}
                        selected={department}
                        setSelected={setDepartment}
                        initialValue="Отделение"
                    />
                <InputContacts placeholder="Почтовый индекс" type="text"  value={postcode} setFunc={setPostcode} />
                </div>
            </div>
        </>
    )
}