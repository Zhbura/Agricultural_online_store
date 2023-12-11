import { Arrow, ArrowRight } from '../SVG/Arrow/Arrow';
import cancel from '../../img/cancelGrey.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeShowSlider } from '../../store/slider/action';
import { selectShowSlider } from '../../store/slider/selectors';

export const SliderAbsolute = ({ images, name, current, setCurrent }) => {
    const dispatch = useDispatch();
    const showSlider = useSelector(selectShowSlider);

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

    return (
        <>
            {showSlider && <div className="wrap-slider">
                <div className="slider-absolute">
                    <button className="slider-absolute__btn-close"
                        onClick={() => dispatch(changeShowSlider)}
                    >
                        <img src={cancel} alt="Закрыть изображение" />
                    </button>
                    {(images.length > 1) ?
                        <div className="arrow-circle arrow-circle_left" onClick={prevImage}>
                            <Arrow />
                        </div> : null}

                    <div className="slider-absolute__wrap">
                        {images.map((image, index) => (
                            <div className={index === current ?
                                'slider-absolute__slide-big slider-absolute__slide-big_active' :
                                'slider-absolute__slide-big'} key={index}>
                                {index === current && (
                                    <div className="slider-absolute__wrap-img">
                                        <img className="slider-absolute__img" src={image} alt={name} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {(images.length > 1) ?
                        <div className="arrow-circle arrow-circle_right" onClick={nextImage}>
                            <ArrowRight />
                        </div> : null}
                </div>
            </div>
            }
        </>
    )
}