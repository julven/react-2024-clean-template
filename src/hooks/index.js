import { useContext, useEffect } from "react";
import NavBar from './navBar';
import { useLocation } from "react-router";
import { context } from "./context";

let Index = () => {
    let location = useLocation()
    let  {AccountContext} = context
    let {setPrevLink} = useContext(AccountContext)
    useEffect(() => {
        
        if(!location.pathname.includes("/login")) {
            setPrevLink(location.pathname);
            console.log(location.pathname)
        } 
        
    }, [location])
    return (
        <>
            <NavBar />
        </>
    )
}
export default Index;