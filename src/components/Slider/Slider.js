import './Slider.scss';

export const Slider = ({ products, currentIndex, switchIndex, classSmall, classBig }) => {
    return (
        <>
            <div className="slider">
                {products.map((slide, index) => (
                    <div
                        className={`${classSmall}${currentIndex === index ? ` ${classBig}` : ''}`} onClick={() => switchIndex(index)} key={index}>
                    </div>
                ))}
            </div>
        </>
    )
}