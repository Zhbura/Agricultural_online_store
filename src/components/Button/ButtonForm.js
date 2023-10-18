import './Button.scss';

export const ButtonForm = (props) => {
    const showMsg = () => {
        props.setMsg(!props.msg)
    }

    const showMsgTimer = () => {
        let timeout;

        timeout = setTimeout(() => {
            showMsg()
        }, 3000)

        return () => clearTimeout(timeout)
    }

    return (
        <>
            <button className="btn-form"
                onClick={() => showMsgTimer()}
            >{props.children}</button>
        </>
    )
}