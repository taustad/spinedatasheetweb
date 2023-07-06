import { useNavigate } from "react-router-dom"
import { arrow_back } from "@equinor/eds-icons"
import { Button, Icon } from "@equinor/eds-core-react"
import { Dispatch, SetStateAction } from "react"
import { TagData } from "../../Models/TagData"
import { TagDataReview } from "../../Models/TagDataReview"
import { GetTagDataReviewService } from "../../api/TagDataReviewService"
import { GetRevisionReviewService } from "../../api/RevisionReviewService"
import { RevisionContainerReview } from "../../Models/RevisionContainerReview"
import { GetTagDataService } from "../../api/TagDataService"
import { useAppContext } from "../../contexts/AppContext"

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

    const { setTagData } = useAppContext()


    const updateTagData = async () => {
        const tagData = await (await GetTagDataService()).getAllTagData()
        if (setTagData === undefined) throw new Error("setTagData is undefined")
        setTagData(tagData)
    }

    const buildTagReview = () => {
        const newReview = new TagDataReview()
        newReview.tagDataId = tagInReview
        return newReview
    }

    const buildPackageReview = () => {
        const newReview: RevisionContainerReview = {}
        newReview.revisionContainerId = revisionInReview
        return newReview
    }

    const approveTag = async () => {
        const review = buildTagReview()
        review.status = 3
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        console.log("result", result)
        await updateTagData()
    }

    const rejectTag = async () => {
        const review = buildTagReview()
        review.status = 4
        const result = await (await GetTagDataReviewService()).createTagDataReview(review)
        console.log("result", result)
        await updateTagData()
    }

    const approvePackage = async () => {
        const review = buildPackageReview()
        review.status = 3
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        console.log("result", result)
        await updateTagData()

    }

    const rejectPackage = async () => {
        const review = buildPackageReview()
        review.status = 4
        const result = await (await GetRevisionReviewService()).createRevisionReview(review)
        console.log("result", result)
        await updateTagData()
    }


    return (
        <div>
            <h1>EquipmentListReview</h1>

            <Button onClick={approveTag}>Approve</Button>
            <Button color="danger" onClick={rejectTag}>Reject</Button>

            <h1>Package review: {revisionInReview}</h1>
            <Button onClick={approvePackage}>Approve</Button>
            <Button color="danger" onClick={rejectPackage}>Reject</Button>


        </div>
    )
}

export default EquipmentListReview
