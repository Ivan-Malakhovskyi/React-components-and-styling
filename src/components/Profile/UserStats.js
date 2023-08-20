import { List, ListItem, UserFollowers, UserStatistics } from "./Profile.styled";
import PropTypes from 'prop-types'


export const UserStats = (
     { stats: { followers, views, likes } } 
) => 
   <List className="stats">
    <ListItem>
      <UserFollowers className="label">Followers</UserFollowers>
            <UserStatistics className="quantity">{ followers}</UserStatistics>
    </ListItem>
    <ListItem>
      <UserFollowers className="label">Views</UserFollowers>
            <UserStatistics className="quantity">{ views}</UserStatistics>
    </ListItem>
    <ListItem>
      <UserFollowers className="label">Likes</UserFollowers>
            <UserStatistics className="quantity">{ likes}</UserStatistics>
    </ListItem>
  </List>




UserStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    })
  }
