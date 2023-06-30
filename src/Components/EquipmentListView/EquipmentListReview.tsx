import { useNavigate } from "react-router-dom"
import { arrow_back } from "@equinor/eds-icons"
import { Button, Icon } from "@equinor/eds-core-react"
import { Dispatch, SetStateAction } from "react"
import { TagData } from "../../Models/TagData"
import { Review } from "../../Models/Review"
import { GetReviewService } from "../../api/ReviewService"

interface Props {
    tags: TagData[],
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>,
    setTagInReview: Dispatch<SetStateAction<string | undefined>>
    tagInReview: string | undefined,
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>
    revisionInReview: string | undefined,
}

function EquipmentListReview({
    tags,
    setReviewModalOpen,
    setTagInReview,
    tagInReview,
    setRevisionInReview,
    revisionInReview
}: Props) {

    const buildReview = () => {
        const newReview = new Review()
        newReview.tagId = tagInReview
        newReview.revisionId = revisionInReview
        return newReview
    }

    const approveTag = async () => {
        const review = buildReview()
        review.status = 3
        const result = await (await GetReviewService()).createReview(review)
        console.log("result", result)
    }

    const rejectTag = async () => {
        const review = buildReview()
        review.status = 4
        const result = await (await GetReviewService()).createReview(review)
        console.log("result", result)
    }

    return (
        <div>
            <h1>EquipmentListReview</h1>

            <Button onClick={approveTag}>Approve</Button>
            <Button color="danger" onClick={rejectTag}>Reject</Button>
        </div>
    )
}

export default EquipmentListReview
