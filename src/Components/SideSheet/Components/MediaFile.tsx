import React, { FC } from "react"
import styled from "styled-components"
import { Typography, Tooltip } from "@equinor/eds-core-react"

interface MediaFileProps {
    src: string;
    name: string;
}

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

const StyledImage = styled.img`
    width: 120px;
    height: 120px;
`

const ImageName = styled.div`
    text-align: center;
    margin-top: 15px;
    max-width: 100px;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const MediaFile: FC<MediaFileProps> = ({ src, name }) => (
    <ImageContainer>
        <StyledImage src={src} alt={name} />
        <Tooltip title={name} placement="bottom">
            <ImageName><Typography variant="caption">{name}</Typography></ImageName>
        </Tooltip>
    </ImageContainer>
)

export default MediaFile
