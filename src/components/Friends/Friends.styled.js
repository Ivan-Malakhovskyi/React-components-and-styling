import styled from 'styled-components'


export const FriendСatalogue = styled.ul`
display: flex;
justify-content: space-around;
padding-bottom: 40px;
`
export const FriendCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius:  ${({theme : {radii}}) => radii.md};
  box-shadow: ${({theme: {colors}}) => colors.addBoxShadow};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border-radius: 50%;

`;


export const Status = styled.span`
  display: inline-block;
  width: 20px; 
  height: 20px; 
  border-radius: 50%; 
  background-color: ${props => {
    return props.$status ? 'green' : 'red';
  }}
  `