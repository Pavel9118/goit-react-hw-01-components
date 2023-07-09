import css from './friendlist.module.css';
// import clsx from 'clsx';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem/FriendListItem'

// function FriendListItem({ avatar, name, isOnline, id }) {
//   return (
  
//     <li className={css.item}>
//      <span className={clsx(css.status, isOnline && css.statusOnline, !isOnline && css.statusOffline)}></span> 
//           <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
//           <p className={css.name}>{name}</p>
//       </li>
//   )
// }

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem 
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id} />
        ))}
    
  
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),  
}