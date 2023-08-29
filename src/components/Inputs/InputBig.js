import './Inputs.scss';

export const InputBig = ({ placeholder, type, value, setFunc }) => {
    const changeInput = (e) => {
        setFunc(e.target.value);
    }

    return (
        <>
            <input className="input-big" type={type} placeholder={placeholder}
                value={value} onChange={changeInput} />
        </>
    )
}