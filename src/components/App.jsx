import './App.css'

import Profile from './Profile/Profile'
import FriendsList from './FriendList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
