import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@equinor/fusion-components';
import { SideSheet } from '@equinor/fusion-react-side-sheet';
import { GetCommentService } from "../api/CommentService"
import { ReviewComment } from '../Models/ReviewComment';
import { Input } from '@equinor/eds-core-react';
import { useParams } from 'react-router-dom';

type ReviewCommentsSideSheetProps = {
    isOpen: boolean;
    onClose: () => void;
    currentProperty: string;
    reviewComments: ReviewComment[]
    setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>
};

const ReviewCommentsSideSheet: React.FC<ReviewCommentsSideSheetProps> = ({
    isOpen,
    onClose,
    currentProperty,
    reviewComments,
    setReviewComments
}) => {
    const [newReviewComment, setNewReviewComment] = useState<ReviewComment>()
    const { tagId } = useParams<Record<string, string | undefined>>()


    const getCommentsForProperty = (property: string) => {
        return reviewComments.filter((comment) => comment.property === property)
    }

    const listCommentsForProperty = (property: string) => {
        return getCommentsForProperty(property).map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                </div>
            );
        });
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const comment = { ...newReviewComment }
        comment.text = event.target.value
        setNewReviewComment(comment)
    }

    const handleSubmit = async () => {
        const comment = { ...newReviewComment }
        comment.tagDataId = tagId
        comment.commentLevel = 0
        comment.property = currentProperty
        try {
            const service = await GetCommentService()
            await service.createComment(comment)
            setReviewComments([...reviewComments, comment])
        } catch (error) {
            console.log(`Error creating comment: ${error}`)
        }
        setNewReviewComment(undefined)
    }


    const sideSheetContent = (property: string) => {
        return (
            <>
                {listCommentsForProperty(property)}
                <Input type="text" onChange={handleCommentChange} value={newReviewComment?.text ?? ""} ></Input>
                <Button onClick={handleSubmit}>Submit</Button>
            </>
        )
    }

    return (
        <div>
            <SideSheet isOpen={isOpen} onClose={onClose} enableFullscreen={true} minWidth={500}>
                <SideSheet.Indicator color={'#c8f649'} />
                <SideSheet.Title title={'Side Sheet Title'} />
                <SideSheet.SubTitle subTitle={'Side Sheet Title'} />
                <SideSheet.Actions>
                    <Button
                        onClick={() => {
                            console.log('Custom Action Help button clicked');
                        }}
                    >
                        Help
                    </Button>
                </SideSheet.Actions>
                <SideSheet.Content>{sideSheetContent(currentProperty)}</SideSheet.Content>
            </SideSheet>
        </div>
    );
};

export default ReviewCommentsSideSheet;