import { Dispatch, SetStateAction } from "react"
import { ICellRendererParams } from "ag-grid-community"

export default (
    params: ICellRendererParams,
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>,
    setTagInReview: Dispatch<SetStateAction<string | undefined>>,
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>,
) => {
    const { value, valueFormatted, data: { id, revisionContainer: { id: revisionId } } } = params
    const cellValue = valueFormatted || value

    const buttonClicked = () => {
        setReviewModalOpen(true)
        setTagInReview(id)
        setRevisionInReview(revisionId)
    }

    return (
        <span>
            <span>{cellValue}</span>
            &nbsp;
            <button type="button" onClick={buttonClicked}>Add review</button>
        </span>
    )
}
