// import Statistics from './Statistics';
import FriendList from '../friendlist/Friendlist';
import data from '../Statistics/data.json';
import friends from '../friendlist/friends.json';
import Statistics from '../Statistics/Statistics';
import transactions from '../TransactionHistory/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import css from './Profile.module.css';
import PropTypes from 'prop-types';



export default function Profile ({ username, tag, location, avatar, stats }) {
  return (<div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
    <FriendList friends={friends} />
    <Statistics
      title="Upload stats"
      stats={data} />
    <TransactionHistory items={transactions} />
  </div>
  );
}; 
// Profile.PropTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar: PropTypes.string,
//   stats: PropTypes.object,
// }