import React, { useContext } from "react"
import styled from "styled-components"
import { ViewContext } from "../../Context/ViewContext"
import ToastCard from "./ToastCard"

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 600px;
`

const ToastBar = () => {
    const { errors } = useContext(ViewContext)

    return (
        <Container id="communicationBar">
            {Object.keys(errors).map((key) => {
                const error = errors[key]
                return (
                    <ToastCard
                        key={key}
                        title={error.title}
                        body={error.body}
                        variant={error.variant}
                        id={key}
                        timeOut={error.timeOut}
                        action={error.action}
                    />
                )
            })}
        </Container>
    )
}

export default ToastBar
