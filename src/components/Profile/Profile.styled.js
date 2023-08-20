
import styled from 'styled-components'

export const TopicProfile = styled.div`
padding: 20px;
text-transform: uppercase; 
font-size: 24px;
color: ${({ theme: { colors } }) => colors.black};
font-weight: bold;
`


export const Wrapper = styled.div` 
margin: 0 auto;
width: 300px;
border: 1px solid black;
background-color:${({ theme: { colors } }) => colors.white}; 
border-radius: ${({theme : {radii}}) => radii.md};
border-color: transparent; 
box-shadow: ${({theme: {colors}}) => colors.addBoxShadow};
`

export const UserFollowersWrapper = styled.div`
    padding: 15px;
    background-color:  ${({theme: {colors}}) => colors.MainBackgroundColor};
    border: 1px solid ${({theme: {colors}}) => colors.grey};
    border-radius: 0px 0px 4px 4px;
    box-shadow: ${({theme: {colors}}) => colors.boxShadow};
  
    `

export const List = styled.ul`
   display: flex;
    justify-content: space-between;
  align-items: center;

` 

export const ListItem = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  `

export const UserImg = styled.img`
margin-top: 20px;
margin-bottom: 20px;
border-radius: 50%;   
background-color: ${({theme: {colors}}) => colors.grey};

`

export const Topic = styled.p`margin-bottom: 10px;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.44px;
`

export const Meta = styled.p`
margin-bottom: 10px;
color: ${({theme: {colors}}) => colors.addGrey};
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.16;
letter-spacing: 0.36px;
`


export const SectionUpload = styled.section`
padding-top: 40px;
padding-bottom: 40px;
`

export const UserFollowers = styled.span`
color: ${({theme: {colors}}) => colors.black};
font-size: 14px;
line-height: 1.16;
letter-spacing: 0.36px;
`

export const UserStatistics = styled.span`
color: ${({ theme: { colors } }) => colors.addBlack};
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 22px;
`




  