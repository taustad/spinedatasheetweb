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
import { Conversation } from "../Models/Conversation"

interface ViewContextProps {
    activeTagData: TagData | undefined;
    setActiveTagData: Dispatch<SetStateAction<TagData | undefined>>;
    activeSheetTab: number;
    setActiveSheetTab: Dispatch<SetStateAction<number>>;
    conversations: Conversation[];
    setConversations: Dispatch<SetStateAction<Conversation[]>>;
    activeConversation: Conversation | undefined;
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>;
}

export const ViewContext = createContext<ViewContextProps>({
    activeTagData: undefined,
    setActiveTagData: () => { },
    activeSheetTab: 0,
    setActiveSheetTab: () => { },
    conversations: [],
    setConversations: () => { },
    activeConversation: undefined,
    setActiveConversation: () => { },
})

interface ViewContextProviderProps {
    children: ReactNode
}
export const ViewContextProvider: React.FC<ViewContextProviderProps> = ({
    children,
}: ViewContextProviderProps) => {
    const [activeTagData, setActiveTagData] = useState<TagData>()
    const [activeSheetTab, setActiveSheetTab] = useState<number>(0)
    const [conversations, setConversations] = useState<Conversation[]>([])
    const [activeConversation, setActiveConversation] = useState<Conversation>()

    const value = useMemo(
        () => ({
            activeTagData,
            setActiveTagData,
            activeSheetTab,
            setActiveSheetTab,
            conversations,
            setConversations,
            activeConversation,
            setActiveConversation,
        }),
        [activeTagData, setActiveTagData, activeSheetTab, setActiveSheetTab],
    )

    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}
