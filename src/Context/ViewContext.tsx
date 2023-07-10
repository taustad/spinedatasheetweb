import React, { createContext, useState, ReactNode } from "react"

export const ViewContext = createContext<any>({})

interface ViewContextProviderProps {
    children: ReactNode
}

export const ViewContextProvider: React.FC<ViewContextProviderProps> = ({
    children,
}) => {
    const value = {}

    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}
