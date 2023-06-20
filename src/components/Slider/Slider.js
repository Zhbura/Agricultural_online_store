import './Slider.scss';

export const Slider = (props) => {
    return (
        <>
            <div className="slider">
                <span className={props.classSmall} />
                <span className={props.classSmall} />
                <span className={props.classBig} />
                <span className={props.classSmall} />
                <span className={props.classSmall} />
            </div>
        </>
    )
}