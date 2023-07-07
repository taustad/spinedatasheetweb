import React, { Dispatch, SetStateAction } from 'react'
import { ICellRendererParams } from 'ag-grid-community'

export default (
    props: ICellRendererParams,
    setReviewModalOpen: Dispatch<SetStateAction<boolean>>,
    setTagInReview: Dispatch<SetStateAction<string | undefined>>,
    setRevisionInReview: Dispatch<SetStateAction<string | undefined>>,
) => {
    const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

    const buttonClicked = () => {
        setReviewModalOpen(true);
        setTagInReview(props.data.id)
        setRevisionInReview(props.data.revisionContainer.id)
    };

    return (
        <span>
            <span>{cellValue}</span>&nbsp;
            <button onClick={() => buttonClicked()}>Add review</button>
        </span>
    )
}