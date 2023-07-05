export const Counter = ({ id, count, increase, decrease, changeValue }) => {
    return (
        <>
            <div className="counter">
                <div className="counter__quantity-circle" onClick={() => decrease(id)}>
                    <span className="counter__minus" />
                </div>
                <input className="counter__input" type="number" min="1" max="100" value={count}
                    onChange={(e) => { changeValue(id, +e.target.value) }}
                />
                <div className="counter__quantity-circle" onClick={() => increase(id)}>
                    <span className="counter__plus" />
                    <span className="counter__minus" />
                </div>
            </div>
        </>
    )
}