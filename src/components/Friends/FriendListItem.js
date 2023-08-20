import { FriendAvatar, FriendCard, Status } from "./Friends.styled"

export const FriendListItem = ({friends: {avatar,name,isOnline}}) => {
    return <FriendCard>
        <Status $status={isOnline}>{isOnline}</Status>
  <FriendAvatar  src={avatar} alt="User avatar" width="48" />
        <p >{ name}</p>
    </FriendCard>
}