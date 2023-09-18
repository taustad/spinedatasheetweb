import React, { FC } from "react"
import styled from "styled-components"

const List = styled.ul`
    list-style: none;
    position: absolute;
    left: 14px;
    bottom: 95px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    margin: 0;
    padding: 0;
    background-color: white;
    li {
        border-bottom: 1px solid LightGray;

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            background-color: #f5f5f5;
        }
    }
`

const ListItem = styled.button`
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    list-style: none;
    padding: 15px;
    border-bottom: 1px solid LightGray;

    &:last-child {
        border-bottom: none;
    }

    &:hover, &:focus {
        background-color: #f5f5f5;
        cursor: pointer;
    }
`

interface Props {
    setTaggedUsers: React.Dispatch<React.SetStateAction<string[]>>
    SearchTerm?: string
    onTagSelected: (displayName: string, userId: string) => void
    dummyData: { id: string; displayName: string; accountType: string; status: string }[]
}

const TagDropDown: FC<Props> = ({
 SearchTerm, setTaggedUsers, onTagSelected, dummyData,
}) => {
    const filteredNames = dummyData.filter(({ displayName }) => !SearchTerm || displayName.toLowerCase().includes(SearchTerm.toLowerCase()))

    const handleTagClick = (userId: string, displayName: string) => {
        setTaggedUsers((prevTaggedUsers) => [...prevTaggedUsers, userId])

        onTagSelected(displayName, userId)
    }

    return (
        <List>
            {filteredNames.map(({ id, displayName }) => (
                <li key={id}>
                    <ListItem onClick={() => handleTagClick(id, displayName)}>
                        {displayName}
                    </ListItem>
                </li>
            ))}
        </List>
    )
}

export default TagDropDown