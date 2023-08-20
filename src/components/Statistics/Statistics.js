import { SectionUpload } from "components/Profile/Profile.styled"
import { DescrUserStats } from "./DescrUserStats"

export const Statistics = ({title,stats}) => {
    return <SectionUpload title={title}>
        <DescrUserStats items={stats} />
    </SectionUpload>
}