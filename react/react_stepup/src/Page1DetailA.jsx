import { useLocation } from "react-router-dom"

export const Page1DetailA = () => {
    const { state } = useLocation()
    return(
        <div>
            <h1>Page1DetailAです</h1>
            <p>{ state }</p>
        </div>
    )
}