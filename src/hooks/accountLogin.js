import { useContext } from "react";
import { context } from "./context"
let AccountLogin = () => {
    let { AccountContext } = context;
    let { setLogged } = useContext(AccountContext);
    return (
        <>
            Click button to login.
            <br />
            <button onClick={() => setLogged(true)}>Login</button>
        </>
    )
}
export default AccountLogin