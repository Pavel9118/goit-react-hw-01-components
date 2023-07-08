// import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import PropTypes from "prop-types";
// import user from './user.json'
// import friends from './friends.json'
// import data from './data.json'



// function FriendList(friends) {
//   console.log(friends);
//   return <ul className="friend-list">
//    <li className="item">
//   <span className="status"></span>
//   <img className="avatar" src="" alt="User avatar" width="48" />
//   <p className="name"></p>
// </li>
  
// </ul>
// }

// function Statistics(props) {
//   console.log(props);
//   return <section className="statistics">
//   <h2 className="title">Upload stats</h2>

//   <ul className="stat-list">
//     <li className="item">
//       <span className="label">.docx</span>
//         <span className="percentage">{data[3].percentage }</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp3</span>
//       <span className="percentage">14%</span>
//     </li>
//     <li className="item">
//       <span className="label">.pdf</span>
//       <span className="percentage">41%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp4</span>
//       <span className="percentage">12%</span>
//     </li>
//   </ul>
// </section>
// }

// const Profile = ({ username, tag, location, avatar, stats }) => {
//  return <div className="profile">
//   <div className="description">
//     <img
//       src={avatar}
//       alt="User avatar"
//       className="avatar"
//     />
//     <p className="name">{username}</p>
//     <p className="tag">{tag}</p>
//     <p className="location">{location}</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">{stats.followers }</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">{stats.views }</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">{stats.likes }</span>
//     </li>
//    </ul>
//    <Statistics props={data} />
//    <FriendList friends={friends} />
// </div>
//  }
// ReactDOM.createRoot(document.getElementById('root')).render(<Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}/>);
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
