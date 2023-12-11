import { useRouteError } from "react-router"
const Error =()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <>
        <h1>OOPS!</h1>
        <h4>{err.status}:{err.statusText}</h4>
        </>
    )
}

export default Error