import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import EquipmentListTable from "../Components/EquipmentListTable"

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    float: left;
    flex-direction: column;
    padding: 20px;
`

function EquipmentListPage() {
    return (
        <Wrapper>
            <Typography variant="h3">Tag info</Typography>
            <EquipmentListTable />
        </Wrapper>
    )
}
export default EquipmentListPage
