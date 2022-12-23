import PropTypes from 'prop-types';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';

import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <div className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <StatisticsInfo stats={stats}/>
        </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}