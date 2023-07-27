import React, { FC } from "react"
import styled from "styled-components"
import { Table } from "@equinor/eds-core-react"

const InfoTable = styled(Table)`
    width: 100%;
    & tr:nth-of-type(even) {
        background-color: #f7f7f7;
    }
`

interface TableViewProps {
    data: Record<string, string>
}

const TableView: FC<TableViewProps> = ({ data }) => (
    <InfoTable>
        {Object.entries(data).map(([key, value]) => (
            <Table.Row key={key}>
                <Table.Cell>{key}</Table.Cell>
                <Table.Cell>{value}</Table.Cell>
            </Table.Row>
            ))}
    </InfoTable>
    )

export default TableView
