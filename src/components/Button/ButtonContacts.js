import './Button.scss';

export const ButtonContacts = (props) => {
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
            <button className={props.formValid ? 'btn-form' : 'btn-form btn-form_disabled'}
                onClick={() => showMsgTimer()}
                disabled={!props.formValid}
            >{props.children}</button>
        </>
    )
}