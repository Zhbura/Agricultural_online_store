import './Button.scss';

export const ButtonForm = (props) => {

    return (
        <>
            <button className={props.formValid ? 'btn-form' : 'btn-form btn-form_disabled'}
                disabled={!props.formValid}
            >{props.children}</button>
        </>
    )
}