import { useState } from "react";
import { Arrow } from "../SVG/Arrow/Arrow";
import './ImageSlider.scss';

export const ImageSlider = ({ images, name }) => {

    const [current, setCurrent] = useState(0);
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
                <div className="image-slider_big">
                    {(images.length > 1) ?
                        <div className="arrow-scroll" onClick={prevImage}>
                            <Arrow />
                        </div> : null}
                    <div className="image-slider__wrap">
                        {images.map((image, index) => (
                            <div className={index === current ?
                                'image-slider__slide-big image-slider__slide-big_active' :
                                'image-slider__slide-big'} key={index}>
                                {index === current && (
                                    <img src={image} alt={name} />
                                )}
                            </div>
                        ))}
                    </div>
                    {(images.length > 1) ?
                        <div className="arrow-scroll arrow_right" onClick={nextImage}>
                            <Arrow />
                        </div> : null}
                </div>
                <div className="image-slider_small">
                    {images.map((image, index) => (
                        <div className={index !== current ?
                            "image-slider__slide-small image-slider__slide-small_active" :
                            "image-slider__slide-small"}
                            key={index}
                            onClick={() => { changeCurrent(index) }}>
                            {index !== current && (
                                <img src={image} alt={name} />
                            )}
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}
