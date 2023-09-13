import React, {
    FC, SetStateAction, Dispatch,
} from "react"
import { Typography } from "@equinor/eds-core-react"
import styled from "styled-components"
import { useCurrentUser } from "@equinor/fusion"
import MessageBox from "./MessageBox"
import { Message } from "../../../../Models/Message"
import { formatDate } from "../../../../utils/helpers"

const Container = styled.div<{ commentIsByCurrentUser: boolean }>`
    align-self: ${(props) => (props.commentIsByCurrentUser ? "flex-end" : "flex-start")};
    margin: 0 15px 15px 15px;
`

const Header = styled.div<{ isCurrentUser: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.isCurrentUser ? "start" : "end")};
    opacity: 0.6;
`

const TimeStamp = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;

    p:first-of-type {
        margin-right: 5px;
    }
`

interface ClusteredMessagesProps {
    comments: Message[]
    reviewComments: Message[]
    setReviewComments: Dispatch<SetStateAction<Message[]>>
}

const ClusteredMessages: FC<ClusteredMessagesProps> = ({
    comments, reviewComments, setReviewComments,
}) => {
    const currentUser: any = useCurrentUser()
    const isCurrentUser = (userId: string) => currentUser?._info.localAccountId === userId
    type Cluster = {
        userId: string;
        meta: {
            commenterName: string | null | undefined;
            createdDate: string;
        };
        messages: {
            text: string | undefined;
            isEdited: boolean | undefined;
            id: string;
            softDeleted: boolean | undefined
            modifiedDate?: string;
        }[];
    };

    const generateMessageCluster = (postedComments: Message[]): Cluster[] => {
        const clusters: Cluster[] = []
        const strToDate = (dateString: string): Date => new Date(dateString)
        const diffInMinutes = (date1: Date, date2: Date): number => (date2.getTime() - date1.getTime()) / 1000 / 60

        postedComments.forEach((comment) => {
            if (!comment.userId || !comment.createdDate) return

            const { userId } = comment
            const createdDate = strToDate(comment.createdDate)

            if (clusters.length === 0
                || clusters[clusters.length - 1].userId !== userId
                || diffInMinutes(strToDate(clusters[clusters.length - 1].meta.createdDate), createdDate) > 5) {
                clusters.push({
                    userId,
                    meta: {
                        commenterName: comment.commenterName,
                        createdDate: comment.createdDate,
                    },
                    messages: [{
                        text: comment.text || undefined,
                        isEdited: comment.isEdited,
                        id: comment.id || "",
                        modifiedDate: comment.modifiedDate,
                        softDeleted: comment.softDeleted,
                    }],
                })
            } else {
                clusters[clusters.length - 1].messages.push({
                    text: comment.text || undefined,
                    isEdited: comment.isEdited,
                    id: comment.id || "",
                    modifiedDate: comment.modifiedDate,
                    softDeleted: comment.softDeleted,
                })
            }
        })

        return clusters
    }

    return (
        <>
            {generateMessageCluster(comments).map((cluster, index) => (
                <Container commentIsByCurrentUser={isCurrentUser(cluster.userId)} key={`${cluster.userId}-${index}`}>
                    <Header isCurrentUser={!isCurrentUser(cluster.userId)}>
                        {!isCurrentUser(cluster.userId) && (
                            <Typography variant="meta">{cluster.meta.commenterName}</Typography>
                        )}
                        <TimeStamp>
                            <Typography variant="meta">{formatDate(cluster.meta.createdDate)}</Typography>
                        </TimeStamp>
                    </Header>
                    <div>
                        {cluster.messages.map((message, messageIndex) => {
                            console.log(message)
                            return (
                                <>
                                    {message.isEdited && (
                                        <Typography variant="meta">
                                            Edited
                                            {" "}
                                            {formatDate(message.modifiedDate || "")}
                                        </Typography>
                                    )}
                                    <MessageBox
                                        key={`${cluster.userId}-${index}-${messageIndex}`}
                                        isCurrentUser={isCurrentUser(cluster.userId)}
                                        messageObject={message}
                                        reviewComments={reviewComments}
                                        setReviewComments={setReviewComments}
                                        userId={cluster.userId}
                                    />
                                </>
                            )
                        })}
                    </div>
                </Container>
            ))}
        </>
    )
}

export default ClusteredMessages