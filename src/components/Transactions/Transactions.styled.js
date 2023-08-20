import styled from 'styled-components'

export const TransactionTable = styled.table`
  width: 100%;
  padding-bottom: 40px; 
  border-spacing: 0;
  border: 1px solid ${({theme: {colors}}) => colors.borderColor};

`

export const TableHead = styled.thead`
  background-color: ${({theme: {colors}}) => colors.turquoise};
`;

export const TableRow = styled.tr`
  background-color: ${props => (props.$even ? '#f0f0f0' : '#fff')};
`;


export const TableCell = styled.td`
padding: 12px 16px;
 border: 1px solid ${({theme: {colors}}) => colors.borderColor};
`

export const TableHeaderCell = styled.td`
padding: 12px 16px;
 border: 1px solid ${({theme: {colors}}) => colors.borderColor};
`