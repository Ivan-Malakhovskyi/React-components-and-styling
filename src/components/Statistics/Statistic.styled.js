import styled from 'styled-components'

const getBackgroundCOlor = ({$percentage,theme:{colors}}) => {
  switch ($percentage) {
          case 10:
      return colors.red
    case 22:
      return colors.yellow
    case 47:
      return colors.paleGreen
    case 17:
      return colors.dodgerBlue
    default:
     return colors.orange
    }

  }

export const Title = styled.h2` 
background-color: ${({theme: {colors}}) => colors.white}; 
border: 1px solid ${({theme: {colors}}) => colors.white};
text-transform: uppercase;
padding: 20px;
font-size: 24px;
  color: ${({theme: {colors}}) => colors.black}`


export const StatList = styled.ul`
   display: flex;
  justify-content: center;
  `

export const StatListItem = styled.li`
  flex: 1;
  padding: 20px;
  background-color: ${({theme: {colors}}) => colors.white};
  box-shadow: ${({theme: {colors}}) => colors.addBoxShadow};
  text-align: center;
   background-color: ${getBackgroundCOlor}

  `

export const Label = styled.span`
   font-size: 18px;  
  `