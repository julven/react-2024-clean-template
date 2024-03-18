import { useContext } from "react";
import { context } from "./context";
import { useNavigate } from "react-router";

let Account = () => {

    let {AccountContext} = context;
    let {account} = useContext(AccountContext)
    let navigate = useNavigate()

    let goTo = () => {

        navigate("/account/edit")

    }   

    return (


        <>
        <h1>Account</h1>
        <table>
            <tbody>
                <tr>
                </tr>
                <tr>
                    <th>First Name</th>
                    <td>{account.fname}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{account.lname}</td>
                </tr>
                <tr>
                    <th>Birthday</th>
                    <td>{account.bday}</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>{account.gender}</td>
                </tr>
               
            </tbody>
        </table>

        <button onClick={() => { goTo()}}>Edit</button>
        
    </>
    )

}

export default Account;