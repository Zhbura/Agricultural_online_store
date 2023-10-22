import { useEffect, useState } from "react";
import { DropdownOrder } from "../Dropdown/DropdownOrder"
import { InputContacts } from "../Inputs/InputContacts";

export const OrderDelivery = ({ setDeliveryValid }) => {

    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [department, setDepartment] = useState('');

    const regions = ["Московская область", "Ленинградская область", "Тверская область"];
    const cities = ["Москва", "Санкт-Петербург", "Тверь"];
    const departments = ['№ 1', '№ 2', '№ 3'];
    const [postcode, setPostcode] = useState('');

    const [postcodeDirty, setPostcodeDirty] = useState(false);

    const [postcodeError, setPostcodeError] = useState(`*Обязательное поле для ввода`);

    useEffect(() => {
        if (postcodeError || !region || !city || !department) {
            setDeliveryValid(false)
        } else {
            setDeliveryValid(true)
        }
    }, [postcodeError, region, city, department])

    const blurHandler = (e) => {
        switch (e.target.title) {
            case `postcode`:
                setPostcodeDirty(true)
                break
        }
    }
    const regExpPostcode = /[0-9*]{6,}$/;

    return (
        <>
            <div className="order__delivery">
                <h4 className="order__heading">Доставка</h4>
                <div className="wrap-contacts wrap-contacts_margin">
                    <DropdownOrder
                        array={regions}
                        selected={region}
                        setSelected={setRegion}
                        initialValue="Область"
                    />
                    <DropdownOrder
                        array={cities}
                        selected={city}
                        setSelected={setCity}
                        initialValue="Город"
                    />
                </div>
                <div className="wrap-contacts">
                    <DropdownOrder
                        array={departments}
                        selected={department}
                        setSelected={setDepartment}
                        initialValue="Отделение"
                    />
                    <div className="wrap-input">
                        {(postcodeDirty && postcodeError) &&
                            <p className="wrap-input__error-msg">{postcodeError}</p>}
                        <InputContacts
                            placeholder="Почтовый индекс"
                            type="text"
                            value={postcode}
                            setFunc={setPostcode}
                            title='postcode'
                            funcBlur={blurHandler}
                            regExp={regExpPostcode}
                            setMsgErr={setPostcodeError}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}