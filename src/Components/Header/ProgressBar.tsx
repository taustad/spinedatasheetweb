// ProgressBar.tsx
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Popover, Typography } from "@equinor/eds-core-react"

interface ProgressBarProps {
    percentage: number
    barColor: string
    title: string
    count: number
}

const FilledBar = styled.div<{ barColor: string; percentage: number }>`
    width: ${({ percentage }) => percentage}%;
    height: 100%;
    background-color: ${({ barColor }) => barColor};
    position: relative;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

const ProgressBar: React.FC<ProgressBarProps> = ({
    percentage,
    barColor,
    title,
    count,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const anchorRef = useRef<HTMLDivElement>(null)

    const openPopover = () => setIsOpen(true)
    const closePopover = () => setIsOpen(false)

    const handleHover = () => {
        openPopover()
    }

    const handleClose = () => {
        closePopover()
    }

    return (
        <>
            <FilledBar
                barColor={barColor}
                percentage={percentage}
                ref={anchorRef}
                onMouseOver={handleHover}
                onMouseLeave={handleClose}
            >
            </FilledBar>
            <Popover
                anchorEl={anchorRef.current}
                onClose={handleClose}
                open={isOpen}
                placement="bottom"
                withinPortal
            >
                <Popover.Header>
                    <Popover.Title>
                        {title}
                    </Popover.Title>
                </Popover.Header>
                <Popover.Content>
                    <Typography variant="body_short">
                           {count + " tags"}
                    </Typography>
                    <Typography variant="body_short">
                        {percentage + "% of total tags"}
                    </Typography>
                </Popover.Content>

            </Popover>
        </>
    )
}

export default ProgressBar
