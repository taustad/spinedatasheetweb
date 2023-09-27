import React, { useState } from "react"
import styled from "styled-components"
import { IToolPanel } from "@ag-grid-community/core"
import { Divider, Icon, Accordion } from "@equinor/eds-core-react"
import { comment_discussion } from "@equinor/eds-icons"
import CheckboxWithCount from "./Components/CheckboxWithCount"

const Container = styled.div`
    width: 250px;
`
const InlineDivider = styled(Divider)`
    margin: 5px 0;
`

const NewCommentsCheck = styled.div`
    background-color: white;
    padding: 10px 8px;
    & svg {
        margin-left: 5px;
    }
`
const CustomCommentCheckbox = styled(CheckboxWithCount)`
    color: #3D3D3D;
    background-color: white;
`

const CustomAccordion = styled(Accordion)`
    & button > svg {
        margin-right: 5px;
    }
`

const initialCommentCategories = [
    {
        name: "Open",
        count: 3,
        checked: false,
        iconColor: "green",
    },
    {
        name: "To be implemented",
        count: 9,
        checked: false,
        iconColor: "red",
    },
    {
        name: "Closed",
        count: 9,
        checked: false,
        iconColor: "black",
    },
    {
        name: "Implemented",
        count: 12,
        checked: false,
        iconColor: "brown",
    },

]

const initialPeople = [
    {
        name: "Ole Johansen",
        id: "1",
        count: 3,
        checked: false,
    },
    {
        name: "Kari Olsen",
        id: "2",
        count: 9,
        checked: false,
    },
    {
        name: "Andreas Nilsen",
        id: "3",
        count: 9,
        checked: false,
    },
    {
        name: "Marte Kristiansen",
        id: "4",
        count: 12,
        checked: false,
    },
]

function CommentFilterToolPanel({}: IToolPanel) {
    const [commentCategories, setCommentCategories] = useState(initialCommentCategories)
    const [newComments, setNewComments] = useState(false)
    const [people, setPeople] = useState(initialPeople) // New State Variable

    const totalCount = commentCategories.reduce((acc, category) => acc + category.count, 0)

    const toggleCheckbox = (name: string) => {
        setCommentCategories((prevCategories) => (prevCategories.map((category) => (category.name === name ? { ...category, checked: !category.checked } : category))))
    }

    const toggleSelectAll = () => {
        const areAllChecked = commentCategories.every((category) => category.checked)
        setCommentCategories((prevCategories) => prevCategories.map((category) => ({ ...category, checked: !areAllChecked })))
    }

     const togglePersonCheckbox = (id: string) => { // New Function
        setPeople((prevPeople) => (prevPeople.map((person) => (person.id === id ? { ...person, checked: !person.checked } : person))))
    }

    const toggleSelectAllPeople = () => { // New Function
        const areAllChecked = people.every((person) => person.checked)
        setPeople((prevPeople) => prevPeople.map((person) => ({ ...person, checked: !areAllChecked })))
    }

    return (
        <Container>
            <NewCommentsCheck>
                <CustomCommentCheckbox
                    label="New Comments"
                    checked={newComments}
                    onChange={() => setNewComments(!newComments)}
                    icon={<Icon data={comment_discussion} color="#007078" size={16} />}
                />
            </NewCommentsCheck>
            <CustomAccordion>
                <Accordion.Item>
                    <Accordion.Header>Status</Accordion.Header>
                    <Accordion.Panel style={{ padding: "0" }}>
                        <CheckboxWithCount
                            count={totalCount}
                            label="Select all"
                            checked={commentCategories.every((category) => category.checked)}
                            onChange={toggleSelectAll}
                        />
                        <InlineDivider />
                        {commentCategories.map((category) => (
                            <CheckboxWithCount
                                icon={<Icon data={comment_discussion} color={category.iconColor} size={16} />}
                                key={category.name}
                                count={category.count}
                                label={category.name}
                                checked={category.checked}
                                onChange={() => toggleCheckbox(category.name)}
                            />
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Header>Author & Mentions</Accordion.Header>
                    <Accordion.Panel style={{ padding: "0" }}>
                        <CheckboxWithCount
                            count={people.reduce((acc, person) => acc + person.count, 0)}
                            label="Select all"
                            checked={people.every((person) => person.checked)}
                            onChange={toggleSelectAllPeople}
                        />
                        <InlineDivider />
                        {people.map((person) => (
                            <CheckboxWithCount
                                key={person.id}
                                count={person.count}
                                label={person.name}
                                checked={person.checked}
                                onChange={() => togglePersonCheckbox(person.id)}
                            />
                        ))}
                    </Accordion.Panel>
                </Accordion.Item>
            </CustomAccordion>

        </Container>
    )
}

export default CommentFilterToolPanel
