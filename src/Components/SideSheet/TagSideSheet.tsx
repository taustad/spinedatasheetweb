import React, { useContext } from "react"
import styled from "styled-components"
import { Typography } from "@equinor/eds-core-react"
import SheetContainer from "./Components/SheetContainer"
import CommentsSideSheet from "./Comments/CommentSideSheet"
import AreaSideSheet from "./Area/AreaSideSheet"
import ChangeLogSideSheet from "./ChangeLog/ChangeLogSideSheet"
import EquipmentSideSheet from "./Equipment/EquipmentSideSheet"
import ActivitySideSheet from "./Activity/ActivitySideSheet"

const Placeholder = styled.div`
  height: 100%;
  width: 100%;
`

type Props = {
  onClose: () => void;
  currentProperty: any;
  activeTagData: any;
};

const TagSideSheet: React.FC<Props> = ({
  activeTagData,
  onClose,
  currentProperty,
}) => {
  const placeholder = (
      <Placeholder>
          <Typography variant="body_short">Work in progress...</Typography>
      </Placeholder>
  )

  return (
      <SheetContainer
          key={activeTagData?.tagNo}
          onClose={onClose}
          activeTagData={activeTagData}
          currentProperty={currentProperty}
          tabs={[
                  { title: "Activity", content: <ActivitySideSheet /> },
                  { title: "Equipment", content: <EquipmentSideSheet /> },
                  { title: "Area", content: <AreaSideSheet /> },
                  { title: "Connections", content: placeholder },
                  {
                      title: "Comments",
                      content: <CommentsSideSheet currentProperty={currentProperty} />,
                  },
                  { title: "Changelog", content: <ChangeLogSideSheet /> },
              ]}
      />
  )
}

export default TagSideSheet
