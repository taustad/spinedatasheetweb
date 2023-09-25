import React, { useState } from "react"
import styled from "styled-components"
import { IToolPanel } from "@ag-grid-community/core"
import {
    Accordion,
    Divider,
    Icon,
    TextField,
} from "@equinor/eds-core-react"
import { comment_discussion, new_alert, error_filled } from "@equinor/eds-icons"
import CheckboxWithCount from "./Components/CheckboxWithCount"

const Container = styled.div`
    width: 250px;
`
const InlineDivider = styled(Divider)`
    margin: 5px 0;
`
const NewCommentsCheck = styled.div`
    padding: 10px 8px;
    font-size: 16px;
    color: #3D3D3D;
    font-weight: 500;
    background-color: white;

    & svg {
        margin-left: 5px;
    }
`

const CustomAccordion = styled(Accordion)`
    & button > svg {
        margin-right: 5px;
    }
`

const CustomCommentCheckbox = styled(CheckboxWithCount)`
    color: #3D3D3D;
    background-color: white;
`

const InitialChangeTypes = [
    {
        name: "Changes since last revision",
        count: 3,
        checked: false,
        iconColor: "green",
    },
    {
        name: "Changes since last visit",
        count: 9,
        checked: false,
    },
    {
        name: "Changes since last selected date",
        count: 9,
        checked: false,
    },
]

const initialInvalidProperties = [
    {
        name: "Operating requirements not met",
        count: 3,
        checked: false,
    },
    {
        name: "Operating requirements not met",
        count: 3,
        checked: false,
    },
    {
        name: "Connection requirements not met",
        count: 3,
        checked: false,
    },
    {
        name: "Property rules broken",
        count: 3,
        checked: false,
    },
    {
        name: "Business standards not followed",
        count: 3,
        checked: false,
    },
]

function IconFilterToolPanel({}: IToolPanel) {
    const [changeTypes, setChangeTypes] = useState(InitialChangeTypes)
    const [invalidProperties, setInvalidProperties] = useState(initialInvalidProperties)
    const [toggleDatePicker, setToggleDatePicker] = useState(false)
    const [comment, setComment] = useState(false)

    const toggleChangeTypeCheckbox = (name: string) => {
        setChangeTypes((prevTypes) => prevTypes.map((type) => (type.name === name ? { ...type, checked: !type.checked } : type)))

        if (name === "Changes since last selected date") {
            setToggleDatePicker((prev) => !prev)
        }
    }

    const toggleInvalidPropertyCheckbox = (name: string) => {
        setInvalidProperties((prevProperties) => prevProperties.map((property) => (property.name === name ? { ...property, checked: !property.checked } : property)))
    }

    const toggleSelectAllInvalidProperties = () => {
    const areAllChecked = invalidProperties.every((property) => property.checked)
    setInvalidProperties((prevProperties) => prevProperties.map((property) => ({ ...property, checked: !areAllChecked })))
}

    return (
        <Container>
            <NewCommentsCheck>
                <CustomCommentCheckbox
                    label="Comments"
                    checked={comment}
                    onChange={() => setComment(!comment)}
                    icon={<Icon data={comment_discussion} color="#007078" size={16} />}
                />
            </NewCommentsCheck>
            <CustomAccordion>
                <Accordion.Item>
                    <Accordion.Header>Change Types</Accordion.Header>
                    <Accordion.Panel style={{ padding: "0" }}>
                        {changeTypes.map((type) => (
                            <CheckboxWithCount
                                key={type.name}
                                count={type.count}
                                label={type.name}
                                checked={type.checked}
                                onChange={() => toggleChangeTypeCheckbox(type.name)}
                                icon={<Icon data={new_alert} color="#007078" size={16} />}
                            />
                            ))}
                        {toggleDatePicker && (
                        <div style={{ padding: "0 10px" }}>
                            <TextField
                                id="date"
                                type="date"
                                label="Select date"
                                style={{ width: "100%" }}
                                onChange={() => {}}
                            />
                        </div>
                            )}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Header>Invalid Properties</Accordion.Header>
                    <Accordion.Panel style={{ padding: "0" }}>
                        <CheckboxWithCount
                            count={invalidProperties.reduce((acc, property) => acc + property.count, 0)}
                            label="Select all"
                            checked={invalidProperties.every((property) => property.checked)}
                            onChange={toggleSelectAllInvalidProperties}
                        />
                        <InlineDivider />
                        {invalidProperties.map((property) => (
                            <CheckboxWithCount
                                key={property.name}
                                count={property.count}
                                label={property.name}
                                checked={property.checked}
                                onChange={() => toggleInvalidPropertyCheckbox(property.name)}
                                icon={<Icon data={error_filled} color="red" size={16} />}
                            />
                            ))}
                    </Accordion.Panel>
                </Accordion.Item>
            </CustomAccordion>
        </Container>
    )
}

export default IconFilterToolPanel