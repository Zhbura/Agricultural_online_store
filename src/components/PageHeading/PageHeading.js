import sheetLeft from '../../img/sheetHeadingLeft.svg';
import sheetRight from '../../img/sheetHeadingRight.svg';
import './PageHeading.scss';

export const PageHeadingOnce = (props) => {
    return <h2 className="page-heading"> <img className="sheet-heading sheet-heading_left" src={sheetLeft} />
        {props.children}
    </h2>
}

export const PageHeadingTwice = (props) => {
    return <h2 className="page-heading"> <img className="sheet-heading sheet-heading_left" src={sheetLeft} />
        {props.children}
        <img className="sheet-heading sheet-heading_right" src={sheetRight} />
    </h2>
}