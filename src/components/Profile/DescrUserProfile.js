import { UserStats } from "components/Profile/UserStats"
import { Wrapper,UserFollowersWrapper,UserImg, Topic, Meta } from "./Profile.styled"
import PropTypes from 'prop-types'


export const DescrUserProfile = ({user: {username,tag,location,avatar,stats}}) => {
    return  (
     <Wrapper>
            <UserImg
            src={avatar}
            width='150'
      alt="User avatar"
      
        />
                <Topic >{username}</Topic>
                <Meta >{tag}</Meta>
            <Meta >{location}</Meta>  
            
                <UserFollowersWrapper>
                <UserStats stats={stats} />
                </UserFollowersWrapper>
     </Wrapper>
        )

}


DescrUserProfile.propTypes = {
    user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,  
    })
}