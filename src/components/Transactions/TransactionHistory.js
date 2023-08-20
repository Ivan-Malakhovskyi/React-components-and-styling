import { TransactionText } from "./TransactionText"
import {  TransactionTable } from "./Transactions.styled"

export const TransactionHistory = ({items}) => {
    return <TransactionTable>
        <TransactionText transactions={items} />
</TransactionTable>
}


