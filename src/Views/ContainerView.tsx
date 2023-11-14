import styled from "styled-components"
import {
 Button, Search, Typography, Icon, Chip,
} from "@equinor/eds-core-react"
import {
 Link, Outlet,
 useOutletContext,
} from "react-router-dom"
import { search } from "@equinor/eds-icons"
import { PersonPhoto } from "@equinor/fusion-components"
import React, { useContext } from "react"
import ReviewButton from "../Components/Buttons/ReviewButton"
import { getDueInDays, formatDate } from "../utils/helpers"
import { ViewContext } from "../Context/ViewContext"

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
`
const HeaderRow = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
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

const HeaderSection = styled.div<HeaderWrapperProps>`
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

const Wrapper = styled.div`
    padding: 15px;
    `

const StyledLink = styled(Link)`
    padding: 10px 15px;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }

    &.active {
        color: #fff;
        background-color: #1976d2;
    }
`

const Links = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-top: 1px solid LightGray;
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

const ContainerView = () => {
    const [pickedContainer, containerComments, tagsInContainer] = useOutletContext<any>()
    const { containerReviews } = useContext(ViewContext)

    const activeContainerReview = containerReviews.find((c) => c.containerId === pickedContainer.id)

    return (
        <Container>
            <HeaderRow>
                <FormWrapper>
                    <Search aria-label="Search for something" />
                    <Button variant="ghost_icon">
                        <Icon data={search} />
                    </Button>
                </FormWrapper>
                <HeaderSection $alignment="baseline">
                    <ReviewStatus>
                        <Typography variant="h2">{pickedContainer.containerName}</Typography>
                        <Chip variant="active">{activeContainerReview?.state}</Chip>
                    </ReviewStatus>

                    <ReviewStatus>
                        <Typography variant="body_short_bold">
                            Revision
                            {" "}
                            {pickedContainer.revisionNumber}
                        </Typography>
                        <Typography variant="body_short">
                            {" "}
                            {formatDate(pickedContainer.containerDate)}
                        </Typography>
                    </ReviewStatus>
                </HeaderSection>
            </HeaderRow>
            <HeaderRow>

                <HeaderSection $alignment="flex-end">
                    <ReviewStatus>
                        <Typography variant="body_short">
                            review due in
                            {" "}
                            {getDueInDays(pickedContainer.containerDate, 10)}
                            {" "}
                            days
                        </Typography>
                        <PersonPhoto personId={initialPeople[0].userId} size="medium" />
                        <GreyDivider />
                        <PeopleWrapper>

                            <AvatarGroup>
                                {initialPeople.map((person) => (
                                    person.userId && (
                                    <PersonPhoto key={person.userId} personId={person.userId} size="medium" />
                                    )
                                ))}
                            </AvatarGroup>
                        </PeopleWrapper>
                    </ReviewStatus>
                    <ReviewButton />
                </HeaderSection>
            </HeaderRow>
            <Links>
                <StyledLink
                    to="."
                >
                    Tags
                </StyledLink>
                <StyledLink
                    to="comments"
                >
                    Comments
                </StyledLink>

            </Links>
            <Wrapper>
                <Outlet context={[pickedContainer, containerComments, tagsInContainer]} />
            </Wrapper>
        </Container>
    )
}

export default ContainerView