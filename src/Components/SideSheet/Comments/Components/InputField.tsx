import React, {
 useRef, useState, useEffect, MutableRefObject,
} from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  background-color: #F7F7F7;
  border-bottom: 1px solid #6F6F6F;
  cursor: text;
  padding: 8px;
`

const StyledP = styled.p<{ isPlaceholder: boolean }>`
  color: ${({ isPlaceholder }) => (isPlaceholder ? "grey" : "black")};
  margin: 0;
  
  min-height: 18px;

  &:focus {
    outline: none;
  }

  span {
    color: #007079;
    font-weight: 500;
`
const CharCount = styled.p<{ isOverLimit: boolean }>`
  color: ${({ isOverLimit }) => (isOverLimit ? "red" : "black")};
  font-weight: ${({ isOverLimit }) => (isOverLimit ? "bold" : "normal")};
  margin: 5px 0 0 0;
  font-size: 12px;
  opacity: 0.8;
`
interface Props {
  placeholder?: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  setShowTagDropDown: React.Dispatch<React.SetStateAction<boolean>>
  newReviewComment: any
  setNewReviewComment: React.Dispatch<React.SetStateAction<any>>
  reRenderCounter: number
  charCount: number
  setCharCount: React.Dispatch<React.SetStateAction<number>>
}

const InputField: React.FC<Props> = ({
  placeholder = "Write a comment...",
  setSearchTerm,
  setShowTagDropDown,
  newReviewComment,
  setNewReviewComment,
  reRenderCounter,
  charCount,
  setCharCount,
}) => {
  const pRef = useRef<HTMLParagraphElement>(null)
  const [isPlaceholderShown, setIsPlaceholderShown] = useState(true)

  useEffect(() => {
      if (pRef.current) {
        if (!newReviewComment?.text) {
          setIsPlaceholderShown(true)
        }
        pRef.current.innerHTML = newReviewComment?.text || placeholder
      }
  }, [reRenderCounter])

  useEffect(() => {
      if (pRef.current && isPlaceholderShown) {
        pRef.current.innerHTML = placeholder
      }
  }, [isPlaceholderShown, placeholder])

  const handleCommentChange = (commentText: string) => {
    const lastAtPos = commentText.lastIndexOf("@")
    const isNextCharSpace = commentText.charAt(lastAtPos + 1) === " "
    const shouldShowDropdown = lastAtPos !== -1 && !isNextCharSpace

    setShowTagDropDown(shouldShowDropdown)

    if (shouldShowDropdown) {
      const termAfterAt = commentText.slice(lastAtPos + 1).split(" ")[0] // Split by space and take the first element
      setSearchTerm(termAfterAt)
    } else {
      setSearchTerm("")
    }

    const comment = { ...newReviewComment, text: commentText }
    setNewReviewComment(comment)
  }

  const handleFocus = () => {
    if (pRef.current) {
      pRef.current.contentEditable = "true"
      pRef.current.focus()
      if (isPlaceholderShown && pRef.current.innerText === placeholder) {
        pRef.current.innerText = ""
        setIsPlaceholderShown(false)
      }
    }
  }

  const handleBlur = () => {
      if (pRef.current) {
        pRef.current.contentEditable = "false"
        const content = pRef.current.innerHTML
        handleCommentChange(content)
        if (content.trim() === "") {
          setIsPlaceholderShown(true)
          pRef.current.innerHTML = placeholder
        } else {
          setIsPlaceholderShown(false)
        }
      }
  }
const handleInput = () => {
    if (pRef.current) {
        const content = pRef.current.innerText
        if (content !== placeholder) {
            handleCommentChange(content)
            console.log("content:", content)
            setCharCount(content.length)
        }
    }
}

  return (
      <>
          <StyledDiv onClick={handleFocus}>
              <StyledP
                  ref={pRef}
                  onBlur={handleBlur}
                  onInput={handleInput}
                  isPlaceholder={isPlaceholderShown}
              />
          </StyledDiv>
          <CharCount isOverLimit={charCount > 500}>
              {charCount}
              /500
          </CharCount>
      </>
  )
}

export default InputField
