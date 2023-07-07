import './Pagination.scss';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';

export const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage, setCurrentPage }) => {
    //общее количество страничек
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    //функции для нажатия на стрелочки
    const nextPage = () => {
        const page = currentPage <= pageNumbers.length - 1 ? (prev => prev + 1) : pageNumbers[0];
        setCurrentPage(page);
    }

    const prevPage = () => {
        const page = currentPage < pageNumbers[1] ? pageNumbers.length : (prev => prev - 1);
        setCurrentPage(page);
    }
    return (
        <>
            <div className="pagination">
                <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowLeft" onClick={prevPage}>
                    <ArrowCheckbox />
                </div>
                {pageNumbers.map((number, i) => (
                    <div className={`pagination__circle-icon${currentPage === number ? ' pagination__circle-icon_active' : ''}`}
                        key={i}
                        onClick={() => paginate(number)}>
                        <span>{number}</span>
                    </div>
                ))}
                <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowRight " onClick={nextPage}>
                    <ArrowCheckbox />
                </div>
            </div>
        </>
    )
}