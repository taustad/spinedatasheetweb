import { Button } from "@equinor/eds-core-react"
import React from "react"

export const saveFilterModel = (
    params: any,
    setSavedFilterModel: React.Dispatch<React.SetStateAction<object>>,
) => {
    setSavedFilterModel(params?.api!.getFilterModel())
    localStorage.setItem("savedFilters", JSON.stringify(params?.api!.getFilterModel()))
}

export const restoreFilterModel = (gridRef: any, savedFilterModel: object) => {
    gridRef.current?.api?.setFilterModel(savedFilterModel)
}

export const showActiveFilters = (
    propFilters: string[],
    setHasActiveFilters: React.Dispatch<React.SetStateAction<boolean>>,
    setFilterButtons: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
) => {
    const filters: any[] = []
    if (propFilters && propFilters.length > 0) {
        setHasActiveFilters(true)
        propFilters.forEach((filter) => {
            filters.push(
                <Button
                    variant="contained"
                    disabled
                    style={{
                        borderRadius: 40,
                        height: 30,
                        backgroundColor: "#f7f7f7",
                        color: "#007079",
                        border: "none",
                    }}
                >
                    {filter}
                </Button>,
            )
        })
    }
    setFilterButtons(filters)
}

export const resetFilters = (
    gridRef: any,
    setFilterButtons: React.Dispatch<React.SetStateAction<JSX.Element[]>>,
    setPropFilters: React.Dispatch<React.SetStateAction<string[]>>,
    setHasActiveFilters: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    gridRef.current?.api!.setFilterModel(null)
    setFilterButtons([])
    setPropFilters([])
    setHasActiveFilters(false)
}
