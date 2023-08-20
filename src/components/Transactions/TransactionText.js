import { TableRow,TableHead, TableCell, TableHeaderCell } from "./Transactions.styled";
import PropTypes from 'prop-types'

export const TransactionText = ({ transactions }) =>
  <>
        <TableHead>
    <tr>
      <TableHeaderCell>Type</TableHeaderCell>
      <TableHeaderCell>Amount</TableHeaderCell>
      <TableHeaderCell>Currency</TableHeaderCell>
    </tr>
  </TableHead>

        <tbody>
            {transactions.map((transaction,idx) =>
                <TableRow key={transaction.id} $even={idx % 2 === 0}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
            </TableRow> )}  
         </tbody>
    </>


TransactionText.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}