// import { DescrUserCard } from "./DescrUserCard"

export const DescrUserStats = ({ items }) =>  {
    return (
      <>
    <h2 className="title">Upload stats</h2>
           
    <ul className="stat-list">
       {items.map(item =>
           <li className="item" key={item.id}>
       <span className="label"> {item.label}</span>
                <span className="percentage">{item.percentage}</span>
           </li>
           
        )}
    </ul>
</>)
}