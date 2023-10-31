
import React, { useState } from "react"
import styled from "styled-components"
import {
 Breadcrumbs, Button, Search, Typography, Icon, Chip,
} from "@equinor/eds-core-react"
import { Link } from "react-router-dom"
import { search } from "@equinor/eds-icons"
import { PersonPhoto } from "@equinor/fusion-components"
import ReviewButton from "../Components/Buttons/ReviewButton"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 15px;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

interface HeaderWrapperProps {
  $alignment?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

const HeaderWrapper = styled.div<HeaderWrapperProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: ${(props) => props.$alignment || "baseline"};
    gap: 15px;

    @media (max-width: 950px) {
        flex-direction: column;
    }
`

const PeopleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
`

const AvatarGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const GreyDivider = styled.div`
  width: 1px;
  background: #D3D3D3;
  flex-grow: 1;
  min-height: 25px;  
`

const ReviewStatus = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    flex-wrap: nowrap;
`

const initialPeople = [
    {
        name: "Ahmed Abdi",
        id: "1",
        userId: "7608e4e8-ff71-41e8-a67b-6667b7ceb886",
        count: 3,
        checked: false,
    },
    {
        name: "Eirik Sander-Fjeld",
        id: "2",
        userId: "e4286c0c-b070-4e21-b183-54dfe20ef83d",
        count: 1,
        checked: false,
    },
    {
        name: "Fredrik Leknes",
        id: "3",
        userId: "1b0de22c-9e08-4191-ad4e-4aca14d53a40",
        count: 3,
        checked: false,
    },
]

const ContainerView = () => (
    <div>
        <Wrapper>
            <Breadcrumbs>
                <Breadcrumbs.Breadcrumb as={Link} to="/test1">
                    test1
                </Breadcrumbs.Breadcrumb>
                <Breadcrumbs.Breadcrumb as={Link} to="/test2">
                    tes2
                </Breadcrumbs.Breadcrumb>
            </Breadcrumbs>
            <FormWrapper>
                <Search aria-label="Search for something" />
                <Button variant="ghost_icon">
                    <Icon data={search} />
                </Button>
            </FormWrapper>
        </Wrapper>
        <Wrapper>
            <HeaderWrapper $alignment="baseline">
                <ReviewStatus>
                    <Typography variant="h2">Container A</Typography>
                    <Chip variant="active">Active</Chip>
                </ReviewStatus>

                <ReviewStatus>
                    <Typography variant="body_short_bold">Revision 1</Typography>
                    <Typography variant="body_short"> - 23. Juni 2023</Typography>
                </ReviewStatus>

            </HeaderWrapper>

            <HeaderWrapper $alignment="flex-end">
                <ReviewStatus>
                    <Typography variant="body_short">review due in 2 days</Typography>
                    <PersonPhoto personId={initialPeople[0].userId} size="medium" />
                    <GreyDivider />
                    <PeopleWrapper>

                        <AvatarGroup>
                            {initialPeople.map((person) => (
                        person.userId && (
                        <PersonPhoto personId={person.userId} size="medium" />
                        )
                    ))}
                        </AvatarGroup>
                    </PeopleWrapper>
                </ReviewStatus>

                <ReviewButton />
            </HeaderWrapper>
        </Wrapper>
    </div>
    )

export default ContainerView