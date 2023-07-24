import { createContext, useContext } from "react"
import { TagData } from "../Models/TagData"

type AppContextType = {
    tagData?: TagData[]
    setTagData?: (tagData: TagData[]) => void
}

const AppContext = createContext<AppContextType>({})

export const useAppContext = (): AppContextType => useContext(AppContext)

export default AppContext
