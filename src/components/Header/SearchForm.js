import { Link } from "react-router-dom";
import search from '../../img/search.svg';
import { useDispatch } from "react-redux";
import { searchProducts } from '../../store/search/action';
import { products } from '../../productsData';
import { useEffect, useRef, useState } from "react";

export const SearchForm = () => {
    // Код для закрытия search-form__autocomplete-item если пользователь совершил клик вне элемента search-form
    // Создание ссылки на элемент клик вне которого нужно отследить
    const searchRef = useRef(null);

    // Если клик был совершен не на ссылку ref и не на его дочерние элементы - 
    // очищаем input тем свмым закрываем search-form__autocomplete-item
    const handleClick = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchValue('')
        }
    }

    //  useEffect отслеживает клик во всем документе и затем чистит его
    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    const [searchValue, setSearchValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const dispatch = useDispatch();

    const sendValueSearch = () => {
        dispatch(searchProducts(searchValue));
    }

    let filterProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    const itemClickHandler = (e) => {
        setSearchValue(e.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }
    return (
        <>
            <form className="search-form" ref={searchRef}>
                <input type="text" placeholder="Поиск..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClick={inputClickHandler}
                />
                <ul className="search-form__autocomplete">
                    {
                        searchValue && isOpen ?
                            filterProducts.map((product) => (
                                <li
                                    className="search-form__autocomplete-item"
                                    key={product.id}
                                    onClick={itemClickHandler} >
                                    {product.name}
                                </li>
                            )) : null}
                </ul>
                <span />
                <div onClick={() => { sendValueSearch() }}>
                    <Link to='catalog_product_filter'>
                        <img src={search} alt="Поиск" />
                    </Link>
                </div>
            </form>
        </>
    )
}