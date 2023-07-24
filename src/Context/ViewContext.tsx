import React,
{
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction
} from "react"
import { TagData } from "../Models/TagData"

interface ViewContextProps {
    activeTagData: TagData | undefined;
    setActiveTagData: Dispatch<SetStateAction<TagData | undefined>>;
}

export const ViewContext = createContext<ViewContextProps>({
    activeTagData: undefined,
    setActiveTagData: () => { },
})

interface ViewContextProviderProps {
    children: ReactNode
}

export const ViewContextProvider: React.FC<ViewContextProviderProps> = ({
    children,
}: ViewContextProviderProps) => {
    const [activeTagData, setActiveTagData] = useState<TagData>()

    const value = {
        activeTagData,
        setActiveTagData,
    }

    return <ViewContext.Provider value={value}>
        {children}
    </ViewContext.Provider>
}
