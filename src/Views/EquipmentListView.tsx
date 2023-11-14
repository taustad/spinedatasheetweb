import { Tabs } from "@equinor/eds-core-react"
import { useCurrentContext } from "@equinor/fusion-framework-react-app/context"
import React, { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { GetTagDataService } from "../api/TagDataService"
import EquipmentListTable from "../Components/EquipmentListView/EquipmentListTable"
import { TagData } from "../Models/TagData"
import TagComparisonTable from "../Components/TagComparisonTable/TagComparisonTable"
import Dialogue from "../Components/Dialogue"
import { ViewContext } from "../Context/ViewContext"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 15px;
`

const StyledTabs = styled(Tabs)`
    width: 100%;
`

const { Panel } = Tabs
const { List, Tab, Panels } = Tabs
const StyledTabPanel = styled(Panel)`
    padding: 0;
    border-top: 1px solid LightGray;
`

function EquipmentListView() {
    const {
        setSideSheetOpen,
        setActiveTagData,
        pathSegments,
    } = useContext(ViewContext)

    const [activeTab, setActiveTab] = useState(() => parseInt(localStorage.getItem("activeTagTab") || "0", 10))
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [externalId, setExternalId] = useState<string | undefined>()
    const [tagData, setTagData] = useState<TagData[] | undefined>(undefined)

    const currentProject = useCurrentContext()

    useEffect(() => {
        setSideSheetOpen(false)
        setActiveTagData(undefined)

        localStorage.setItem("activeTagTab", activeTab.toString())
    }, [activeTab])

        useEffect(() => {
        if (currentProject.currentContext?.externalId !== externalId) {
            setExternalId(currentProject.currentContext?.externalId)
        }
    }, [currentProject])

    // Get all tag data
    useEffect(() => {
        let isCancelled = false;

        (async () => {
            if (externalId !== undefined) {
                setError(false)
                setIsLoading(false)
                try {
                    setIsLoading(true)

                    const allTagData = await (await GetTagDataService()).getAllTagData()
                    if (!isCancelled) {
                        setTagData(allTagData)
                        setIsLoading(false)
                    }
                } catch {
                    if (!isCancelled) {
                        console.error("Error loading tags")
                        setError(true)
                    }
                }
            }
        })()

        return () => {
            isCancelled = true
        }
    }, [externalId])

    if (!currentProject.currentContext) {
        return <Dialogue type="error" message="No project selected" />
    }

    if (error) {
        return <Dialogue type="error" message="Error loading tags" />
    }

    if (isLoading) {
        return <Dialogue type="loading" message="Loading tags..." />
    }

    if (!tagData || tagData.length === 0) {
        return <Dialogue type="error" message="No tags found in this project" />
    }

return (
  pathSegments[2] !== undefined ? (
      <Outlet />
  ) : (
      <Wrapper>
          <StyledTabs
              activeTab={activeTab}
              onChange={setActiveTab}
          >
              <List>
                  <Tab>Tag info</Tab>
                  <Tab>Tag comparison</Tab>
              </List>
              <Panels>
                  <StyledTabPanel>
                      <EquipmentListTable
                          tags={tagData}
                      />
                  </StyledTabPanel>
                  <StyledTabPanel>
                      <TagComparisonTable tags={tagData} />
                  </StyledTabPanel>
              </Panels>
          </StyledTabs>
      </Wrapper>
  )
)
}

export default EquipmentListView