import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./context";
import {  useSelector } from "react-redux";

let Home = () => {

    let {AccountContext} = context;
    let {account} = useContext(AccountContext);
    let list = useSelector(state => state.list.value)

    return (

        <>
            <h1>Home</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Account:</td>
                        <th> {account.fname} <Link to="/account">View</Link></th>
                    </tr>
                    <tr>
                        <td>List total:</td>
                        <th> {list.length} <Link to="/list">View</Link></th>
                    </tr>
                </tbody>
            </table>
        </>

    )
}

export default Home;