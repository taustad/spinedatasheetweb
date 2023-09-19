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
    SearchTerm?: string
    onTagSelected: (displayName: string, userId: string) => void
    dummyData: { azureUniqueId: string; displayName: string; accountType: string; status: string }[]
    setReRenderCounter: React.Dispatch<React.SetStateAction<number>>
}

const TagDropDown: FC<Props> = ({
 SearchTerm, onTagSelected, dummyData, setReRenderCounter,
}) => {
    const filteredNames = dummyData.filter(({ displayName }) => !SearchTerm || displayName.toLowerCase().includes(SearchTerm.toLowerCase()))

    const handleTagClick = (userId: string, displayName: string) => {
        setReRenderCounter((prev) => prev + 1)
        onTagSelected(displayName, userId)
    }

    return (
        <List>
            {filteredNames.map(({ azureUniqueId, displayName }) => (
                <li key={azureUniqueId}>
                    <ListItem onClick={() => handleTagClick(azureUniqueId, displayName)}>
                        {displayName}
                    </ListItem>
                </li>
            ))}
        </List>
    )
}

export default TagDropDown