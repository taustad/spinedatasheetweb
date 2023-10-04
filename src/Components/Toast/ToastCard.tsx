import React, { useState, useEffect, useContext } from "react"
import {
 Typography, Card, Icon, Button,
} from "@equinor/eds-core-react"
import styled from "styled-components"
import { close } from "@equinor/eds-icons"
import { ViewContext } from "../../Context/ViewContext"

interface TimerBarProps {
    timerProgress: number;
}

interface TransitionProps {
    transitioning: boolean;
}
const CardContainer = styled.div<TransitionProps>`
    width: 100%;
    &::after {
        content: '';
        display: block;
        padding: ${(props: { transitioning: boolean }) => (props.transitioning ? "0" : "10px")};
        transition: padding 0.3s ease;
    }
`

const StyledCard = styled(Card)<TransitionProps>`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-height: ${(props: { transitioning: boolean }) => (props.transitioning ? "0" : "900px")};
    opacity: ${(props: { transitioning: boolean }) => (props.transitioning ? "0" : "1")};
    transition: max-height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
    padding-bottom: 16px;
`

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: grey;
`

const CloseIcon = styled(Icon)`
    cursor: pointer;
    position: relative;
    top: 5px;
    right: 15px;
    &:hover {
        color: #007078;
    }
`
const TimerBar = styled.div<TimerBarProps>`
    width: ${(props: { timerProgress: number }) => props.timerProgress}%;
    height: 5px;
    background-color: #bdbdbd;
    transition: width 0.3s ease;
`

const HeaderText = styled(Typography)`
    padding-bottom: 0!important;
`

interface Props {
    title: string
    body: string
    variant: string
    id: string
    timeOut?: number
    action?: () => void
}

const ToastCard = ({
 title, body, variant: variantProp, id, timeOut, action,
}: Props) => {
    const { setErrors } = useContext(ViewContext)

    const validVariants: Array<"default" | "danger" | "info" | "warning"> = ["default", "danger", "info", "warning"]
    let variant: "default" | "danger" | "info" | "warning" = "default"

    if (validVariants.includes(variantProp as any)) {
        variant = variantProp as "default" | "danger" | "info" | "warning"
    }

    const [transitioning, setTransitioning] = useState(false)

    const dismiss = () => {
        setErrors((prev) => {
            const newErrors = { ...prev }
            delete newErrors[id]
            return newErrors
        })
    }

    useEffect(() => {
        if (transitioning) {
            setTimeout(() => {
                dismiss()
            }, 300)
        }
    }, [transitioning, id, setErrors])

    const step = timeOut ? 100 / (timeOut / 100) : 0
    const [timerProgress, setTimerProgress] = useState(100)

    useEffect(() => {
        if (!timeOut) return undefined

        const intervalId = setInterval(() => {
            setTimerProgress((prev) => (prev > 0 ? prev - step : 0))
        }, 100)

        return () => {
            clearInterval(intervalId)
        }
    }, [timeOut, step])

    useEffect(() => {
        if (timerProgress < 1) {
            setTransitioning(true)
        }
    }, [timerProgress])

    return (
        <CardContainer transitioning={transitioning}>
            <StyledCard transitioning={transitioning} variant={variant}>
                <Head>
                    <Card.Header>
                        <HeaderText variant="h3">{title}</HeaderText>
                    </Card.Header>
                    {!timeOut && <CloseIcon onClick={() => setTransitioning(true)} data={close} />}
                </Head>
                <Card.Content>
                    <Typography>{body}</Typography>
                </Card.Content>
                {action && (
                    <Card.Actions alignRight>
                        <Button onClick={action}>Action</Button>
                    </Card.Actions>
                )}

                {timeOut && <TimerBar timerProgress={timerProgress} />}
            </StyledCard>
        </CardContainer>
    )
}

export default ToastCard
