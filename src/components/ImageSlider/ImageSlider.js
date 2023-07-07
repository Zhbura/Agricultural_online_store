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
    return (
        <>
            <div className="image-slider">
                <div className="image-slider__img">
                    <div className="arrow-scroll" onClick={prevImage}>
                        <Arrow />
                    </div>
                    <div className="image-slider__wrap">
                        {images.map((image, index) => (
                            <div className={index === current ?
                                'image-slider__slide image-slider__slide_active' :
                                'image-slider__slide'} key={index}>
                                {index === current && (
                                    <img src={image} alt={name} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="arrow-scroll arrow_right" onClick={nextImage}>
                        <Arrow />
                    </div>
                </div>
            </div>
        </>
    )
}