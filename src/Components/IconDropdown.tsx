import React from "react"
import styled from "styled-components"
import { Typography, Progress, Icon } from "@equinor/eds-core-react"
import { error_filled } from "@equinor/eds-icons"

const Dropbtn = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Dropdown = styled.div`
    position: relative;
    display: inline-block;
`

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    backgroundColor: #f1f1f1;
    minWidth: 160px;
    boxShadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    zIndex: 1;
`

const DropdownLink = styled.a`
    color: black;
    padding: 12px 16px;
    textDecoration: none;
    display: block;
`

interface Props {
    message: String
}

const IconDropdown = ({ message }: Props) => {
    console.log("IconDropdown", message)

    return (
        <Dropdown>
            <Dropbtn>Dropdown</Dropbtn>
            <DropdownContent>
                <DropdownLink href="#">Link 1</DropdownLink>
                <DropdownLink href="#">Link 2</DropdownLink>
                <DropdownLink href="#">Link 3</DropdownLink>
            </DropdownContent>
        </Dropdown>
    )
}

export default IconDropdown