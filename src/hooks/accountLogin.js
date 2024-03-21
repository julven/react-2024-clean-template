import { useContext } from "react";
import { context } from "./context"
import { useNavigate } from "react-router";
let AccountLogin = () => {
    let { AccountContext } = context;
    let { setLogged, prevLink } = useContext(AccountContext);
    let navigate = useNavigate()
    let login = () => {
        setLogged(true)
        navigate(prevLink)      
    }
    return (
        <>
            Click button to login.
            <br />
            <button onClick={() => login()}>Login</button>
        </>
    )
}
export default AccountLogin