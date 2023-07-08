import clsx from 'clsx';
import css from './FriendListItem.module.css';


export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
  
    <li className={css.item}>
     <span className={clsx(css.status, isOnline && css.statusOnline, !isOnline && css.statusOffline)}></span> 
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
      </li>
  )
};

