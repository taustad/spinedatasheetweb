import React, { FC } from "react"
import styled from "styled-components"
import TabsTitle from "../../Components/TabsTitle"
import MediaFile from "../../Components/MediaFile"

const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const UserManuals: FC = () => {
    const oilIndustryPDFs = [
    {
        src: "https://via.placeholder.com/150",
        name: "Offshore Drilling.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "Refinery Process.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "Offshore Platform.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "Pipeline Construction.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "Tanker Operation.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "Oil Extraction.pdf",
    },
]
    return (
        <div>
            <TabsTitle>User Manuals</TabsTitle>
            <MediaContainer>
                {oilIndustryPDFs.map((image, index) => (
                    <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                    ))}
            </MediaContainer>
        </div>
    )
}

export default UserManuals