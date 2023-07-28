import React, { FC, useState } from "react"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import TabsTitle from "../TabsTitle"
import MediaFile from "../../Components/MediaFile"

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
`

const StyledButton = styled.button<{ active: boolean }>`
    position: relative;
    bottom: -2px;
    padding: 10px 20px;
    background-color: transparent;
    color: black;
    border: none;
    border-bottom: ${(props) => (props.active ? "2px solid #007079" : "2px solid lightgray")};
    color: ${(props) => (props.active ? "#007079" : "black")};
    border-radius: 0;

    &:hover {
        background-color: transparent;
        color: ${(props) => (props.active ? "#007079" : "black")};        
        border-bottom: 2px solid #007079;
        border-radius: 0;
    }

    &:focus {
        background-color: transparent;
        color: ${(props) => (props.active ? "#007079" : "black")};
        border-bottom: 2px solid #007079;
        border-radius: 0;
    }
`

const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Media: FC = () => {
    const [activeTab, setActiveTab] = useState(0)

const oilIndustryImages = [
    {
        src: "https://via.placeholder.com/150",
        name: "SunsetOverRigblablablablaaaaaaaaaaSunsetOverRig.png",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "RefineryAtWork.png",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "BirdsEyePlatform.png",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "UndergroundPipelines.png",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "BusyOilTanker.png",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "FirstOilWell.png",
    },
]

const oilIndustryDrawings = [
    {
        src: "https://via.placeholder.com/150",
        name: "RigBlueprint.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "RefineryDesign.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "PlatformConstructionPlan.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "PipelineNetwork.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "TankerDiagram.pdf",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "WellBoreDesign.pdf",
    },
]

const oilIndustryVideos = [
    {
        src: "https://via.placeholder.com/150",
        name: "DrillingRigTimeLapse.mp4",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "RefineryProcessExplained.mp4",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "PlatformConstruction.mp4",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "PipelineInstallation.mp4",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "TankerLoadingUnloading.mp4",
    },
    {
        src: "https://via.placeholder.com/150",
        name: "WellDrillingProcedure.mp4",
    },
]

    return (
        <div>
            <TabsTitle>Media</TabsTitle>
            <Navigation>
                <StyledButton active={activeTab === 0} onClick={() => setActiveTab(0)}>Drawings</StyledButton>
                <StyledButton active={activeTab === 1} onClick={() => setActiveTab(1)}>Pictures</StyledButton>
                <StyledButton active={activeTab === 2} onClick={() => setActiveTab(2)}>Videos</StyledButton>
            </Navigation>
            {
                activeTab === 0 && (
                    <div>
                        <Typography variant="h4">Drawings</Typography>
                        <MediaContainer>
                            {oilIndustryDrawings.map((image, index) => (
                                <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                                ))}
                        </MediaContainer>
                    </div>
                )
            }
            {
                activeTab === 1 && (
                    <div>
                        <Typography variant="h4">Drawings</Typography>
                        <MediaContainer>
                            {oilIndustryImages.map((image, index) => (
                                <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                                ))}
                        </MediaContainer>
                    </div>
                )
            }
            {
                activeTab === 2 && (
                    <div>
                        <Typography variant="h4">Drawings</Typography>
                        <MediaContainer>
                            {oilIndustryVideos.map((image, index) => (
                                <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                                ))}
                        </MediaContainer>
                    </div>
                )
            }
        </div>
    )
    }

export default Media
