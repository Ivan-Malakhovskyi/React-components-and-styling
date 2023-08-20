import { FriendListItem } from "./FriendListItem"
import {  FriendСatalogue } from "./Friends.styled"

export const FriendList = ({ friends }) => {
    return <FriendСatalogue >
        {friends.map(friend => <li key={friend.id}>
            <FriendListItem friends={ friend} />
        </li>)}
    </FriendСatalogue>
}