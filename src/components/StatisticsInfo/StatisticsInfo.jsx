import PropTypes from 'prop-types';

import css from './StatisticsInfo.module.css';

export const StatisticsInfo = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => (
            <li
                key={id}
                className={css.item}
                style={{ backgroundColor: getRandomColor() }}
            >
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
            ))}
        </ul>
    )
}
// Случайный цвет
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase()}`;
}

StatisticsInfo.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}