import { Arrow } from "../SVG/Arrow/Arrow";
import './ImageSlider.scss';
import { useDispatch } from "react-redux";
import { changeShowSlider } from "../../store/slider/action";

export const ImageSlider = ({ images, name, current, setCurrent }) => {
    const dispatch = useDispatch();

    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    const changeCurrent = (index) => {
        setCurrent(index)
    }

    return (
        <>
            <div className="image-slider">
                <div className="slider-big">
                    {(images.length > 1) ?
                        <div className="arrow-scroll arrow_left" onClick={prevImage}>
                            <Arrow />
                        </div> : null}
                    <div className="slider-big__container">
                        {images.map((image, index) => (
                            <div onClick={() => {
                                dispatch(changeShowSlider)
                            }}
                                className={index === current ?
                                    'slider-big__slide slider-big__slide_active' :
                                    'slider-big__slide'} key={index}>
                                {index === current && (
                                    <div className="slider-big__wrap-img">
                                        <img className="slider-big__main-img" src={image} alt={name} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {(images.length > 1) ?
                        <div className="arrow-scroll arrow_right" onClick={nextImage}>
                            <Arrow />
                        </div> : null}
                </div>
                <div className="slider-small">
                    {images.map((image, index) => (
                        <div className={index !== current ?
                            "slider-small__slide slider-small__slide_active" :
                            "slider-small__slide"}
                            key={index}
                            onClick={() => { changeCurrent(index) }}>
                            {index !== current && (
                                <div className="slider-small__wrap-img">
                                    <img className="slider-small__main-img" src={image} alt={name} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}