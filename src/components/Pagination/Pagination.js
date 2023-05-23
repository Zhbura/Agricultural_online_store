import './Pagination.scss';
import { ArrowDownMenu } from '../SVG/ArrowMenu/ArrowDownMenu';

export const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="pagination__circle-icon pagination__circle-icon_arrowLeft">
                    <div className="arrow-menu_orange">
                        <ArrowDownMenu />
                    </div>
                </div>
                <div className="pagination__circle-icon"><span>1</span></div>
                <div className="pagination__circle-icon"><span>2</span></div>
                <div className="pagination__circle-icon"><span>...</span></div>
                <div className="pagination__circle-icon"><span>6</span></div>
                <div className="pagination__circle-icon"><span>7</span></div>
                <div className="pagination__circle-icon pagination__circle-icon_arrowRight">
                    <div className="arrow-menu_orange">
                        <ArrowDownMenu />
                    </div>
                </div>
            </div>
        </>
    )
}