import { DescrUserProfile } from "./Profile/DescrUserProfile";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'
import {  GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container";


export const App = () => {
  return (
    <Container>
      <Profile />
      <DescrUserProfile user={ user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Container>
  );
};

// MainUserDescr({items: user})