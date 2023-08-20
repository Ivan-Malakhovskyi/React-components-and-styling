import { Label, StatList, StatListItem, Title } from "components/Statistics/Statistic.styled"
import PropTypes from 'prop-types'

export const DescrUserStats = ({ items }) =>  {
    return (
      <>
    <Title>Upload stats</Title>
           
    <StatList >
       {items.map(item =>
           <StatListItem $percentage={item.percentage} key={item.id}>
               <Label > {item.label}</Label>
               <br></br>
                <Label >{item.percentage}%</Label>
           </StatListItem>
           
        )}
    </StatList>
</>)
}




DescrUserStats.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }))
}