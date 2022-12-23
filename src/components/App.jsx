import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import items from '../assets/transactions.json';

export const App = () => {
  return (
    <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
      
      
        <Statistics
          // Заголовок статистики
            title="Upload stats"
            stats={data}
        />
      
        <FriendList
          friends={friends}
        />
      
       <TransactionHistory
        transactions={items} />
      
    </>
      
  );
};

