import css from './Transactionhistory.module.css';
import PropTypes from 'prop-types';


export default function TransactionHistory({ items }) {

  return (
    <table className={css.tableborder}>
      <thead>
        <tr className={css.trborder}>
          <th className={css.thborder}>Type</th>
          <th className={css.thborder}>Amount</th>
          <th className={css.thborder}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
         <tr key={item.id}>
            <td className={css.tdborder}>{item.type}</td>
            <td className={css.tdborder}>{item.amount}</td>
            <td className={css.tdborder}>{item.currency}</td>
        </tr> 
        ))}
        
      </tbody>
    </table>
  );
};

TransactionHistory.PropTypes = {
  items: PropTypes.array,
}