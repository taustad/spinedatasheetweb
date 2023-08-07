import React,
{
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useMemo,
} from "react"
import { TagData } from "../Models/TagData"

interface ViewContextProps {
    activeTagData: TagData | undefined;
    setActiveTagData: Dispatch<SetStateAction<TagData | undefined>>;
    activeSheetTab: number;
    setActiveSheetTab: Dispatch<SetStateAction<number>>;
}

export const ViewContext = createContext<ViewContextProps>({
    activeTagData: undefined,
    setActiveTagData: () => { },
    activeSheetTab: 0,
    setActiveSheetTab: () => { },
})

interface ViewContextProviderProps {
    children: ReactNode
}
export const ViewContextProvider: React.FC<ViewContextProviderProps> = ({
    children,
}: ViewContextProviderProps) => {
    const [activeTagData, setActiveTagData] = useState<TagData>()
    const [activeSheetTab, setActiveSheetTab] = useState<number>(0)

    const value = useMemo(
        () => ({
            activeTagData,
            setActiveTagData,
            activeSheetTab,
            setActiveSheetTab,
        }),
        [activeTagData, setActiveTagData, activeSheetTab, setActiveSheetTab],
    )

    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}
