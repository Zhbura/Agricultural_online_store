export const InputContacts = ({ placeholder, type, value, setFunc }) => {

    const changeInput = (e) => {
        setFunc(e.target.value);
    }

    return (
        <>
            <input className="input-data" type={type} placeholder={placeholder}
                value={value} onChange={changeInput} />
        </>
    )
}