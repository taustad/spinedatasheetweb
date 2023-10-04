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

interface ErrorType {
    [key: string]: {
        title: string;
        body: string;
        variant: string;
        timeOut?: number;
        action?: () => void;
    };
}

interface ViewContextProps {
    activeTagData: TagData | undefined;
    setActiveTagData: Dispatch<SetStateAction<TagData | undefined>>;
    activeSheetTab: number;
    setActiveSheetTab: Dispatch<SetStateAction<number>>;
    conversations: Conversation[];
    setConversations: Dispatch<SetStateAction<Conversation[]>>;
    activeConversation: Conversation | undefined;
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>;
    errors: ErrorType;
    setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
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
    errors: {},
    setErrors: () => { },
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
    const [errors, setErrors] = useState<{}>({})

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
            errors,
            setErrors,
        }),
        [
            activeTagData,
            setActiveTagData,
            activeSheetTab,
            setActiveSheetTab,
            conversations,
            setConversations,
            activeConversation,
            setActiveConversation,
            errors,
            setErrors,
        ],
    )

    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}
