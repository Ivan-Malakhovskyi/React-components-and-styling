import { DescrUserStats } from "./DescrUserStats"

export const Statistics = ({title,stats}) => {
    return <section title={title}>
        <DescrUserStats items={stats} />
    </section>
}