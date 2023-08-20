import './Button.scss';

export const ButtonForm = (props) => {
    return (
        <>
            <button className="btn-form">{props.children}</button>
        </>
    )
}