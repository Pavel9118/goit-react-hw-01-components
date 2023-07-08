import Profile from "./components/Profile/Profile";
import FriendList from "components/friendlist/Friendlist";
import Statistics from "components/Statistics/Statistics";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";
import user from './components/Profile/user.json';
import friends from './components/friendlist/friends.json';
import data from './components/Statistics/data.json';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats} />
    <FriendList friends={friends} /> 
    <Statistics
      title="Upload stats"
      stats={data} />
    <TransactionHistory items={transactions} />
  </div>;
}