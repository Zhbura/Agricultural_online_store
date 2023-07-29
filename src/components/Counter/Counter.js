import { useDispatch } from 'react-redux';
import './Counter.scss';
import { changeValueProduct, decreaseProductCart, increaseProductCart } from '../../store/cart/action';

export const Counter = ({ id, count }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="counter">
                <div className="counter__quantity-circle"
                    onClick={() => dispatch(decreaseProductCart(id))}>
                    <span className="counter__minus" />
                </div>
                <input className="counter__input" type="number" min="1" max="100" value={count}
                    onChange={(e) => { dispatch(changeValueProduct(id, +e.target.value)) }}
                />
                <div className="counter__quantity-circle"
                    onClick={() => dispatch(increaseProductCart(id))}>
                    <span className="counter__plus" />
                    <span className="counter__minus" />
                </div>
            </div>
        </>
    )
}