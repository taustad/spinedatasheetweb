import { Dispatch, SetStateAction } from "react"
import { ICellRendererParams } from "ag-grid-community"

export default (
    params: ICellRendererParams,
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>,
    setTagInReview: Dispatch<SetStateAction<string | undefined>>,
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>,
) => {
    const cellValue = params.valueFormatted ? params.valueFormatted : params.value

    const buttonClicked = () => {
        setReviewModalOpen(true)
        setTagInReview(params.data.id)
        setRevisionInReview(params.data.revisionContainer.id)
    }

    return (
        <span>
            <span>{cellValue}</span>&nbsp;
            <button type="button" onClick={() => buttonClicked()}>Add review</button>
        </span>
    )
}