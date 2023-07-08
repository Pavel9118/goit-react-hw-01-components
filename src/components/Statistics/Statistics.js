
import PropTypes from "prop-types";
import css from './Statistics.module.css'
export default function Statistics({ title, stats, id }) {
  console.log(stats[0]);
  return (
    <section className="statistics">
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(stat => (<li key={id} className={css.item}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}</span>
    </li>))}
    
    </ul>
</section>
  )
};
Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}