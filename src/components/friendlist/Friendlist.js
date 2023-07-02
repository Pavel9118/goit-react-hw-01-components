import css from './friendlist.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
  
    <li key={id} className={css.item}>
     {isOnline=true && (<span className="status">Online</span>)} 
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
      </li>
  )
}

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem 
        avatar={friend.avatar}
        name={friend.name} />
        ))}
    
  
    </ul>
  );
};


FriendListItem.PropTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}