import { FC, ReactNode } from "react"
import { AppHeader } from "./components/AppHeader"


interface Props {
    children: ReactNode
}

const AppLayout:FC<Props> = ({children}) => {
    return (
        <>
            <AppHeader/>
            <main>
                {children}
            </main>
        </>
  )
}

export default AppLayout