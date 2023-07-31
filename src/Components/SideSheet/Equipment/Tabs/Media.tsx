import React, { FC, useState, ReactElement } from "react"
import styled from "styled-components"
import TabsTitle from "../../Components/TabsTitle"
import MediaFile from "../../Components/MediaFile"
import LocalNavigation from "../../Components/LocalNavigation"

const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const Media: FC = () => {
    const [activeTab, setActiveTab] = useState(0)
    const Navigationbuttons = ["Drawings", "Pictures", "Videos"]

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

    const mediaContent: { [index: number]: ReactElement } = {
        0: (
            <MediaContainer>
                {oilIndustryDrawings.map((image, index) => (
                    <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                ))}
            </MediaContainer>
        ),
        1: (
            <MediaContainer>
                {oilIndustryImages.map((image, index) => (
                    <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                ))}
            </MediaContainer>
        ),
        2: (
            <MediaContainer>
                {oilIndustryVideos.map((image, index) => (
                    <MediaFile key={`${image.name}-${index}`} src={image.src} name={image.name} />
                ))}
            </MediaContainer>
        ),
    }

    return (
        <div>
            <TabsTitle>Media</TabsTitle>
            <LocalNavigation activeTab={activeTab} setActiveTab={setActiveTab} buttons={Navigationbuttons} />
            {mediaContent[activeTab] || mediaContent[0]}
        </div>
    )
}

export default Media
