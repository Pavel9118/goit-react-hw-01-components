import clsx from 'clsx';
import css from './FriendListItem.module.css';
// import FriendList from '../Friendlist';
import PropTypes from "prop-types";



export default function FriendListItem({ avatar, name, isOnline }) {
  return (
  
    <li className={css.item}>
     <span className={clsx(css.status, isOnline && css.statusOnline, !isOnline && css.statusOffline)}></span> 
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
      </li>
  )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

