export const DescrUserCard = ({info: {label,percentage}}) => {
    return (
        <div>
             <h2 class="title">Upload stats</h2>
        <div>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
        </div>
    </div>)
}