import { DescrUserProfile } from "./DescrUserProfile";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { UserStats } from "./UserStats";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory";
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile />
      <DescrUserProfile user={ user} />
      <UserStats stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// MainUserDescr({items: user})