import './Pagination.scss';
import { ArrowCheckbox } from '../SVG/ArrowCheckbox/ArrowCheckbox';

export const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowLeft">
                    <ArrowCheckbox />
                </div>
                <div className="pagination__circle-icon"><span>1</span></div>
                <div className="pagination__circle-icon"><span>2</span></div>
                <div className="pagination__circle-icon"><span>...</span></div>
                <div className="pagination__circle-icon"><span>6</span></div>
                <div className="pagination__circle-icon"><span>7</span></div>
                <div className="pagination__circle-icon arrow-checkbox_orange pagination__circle-icon_arrowRight ">
                    <ArrowCheckbox />
                </div>
            </div>
        </>
    )
}