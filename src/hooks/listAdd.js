import { useContext } from "react";
import Form from "./form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "./redux";
import { context } from "./context";
let ListAdd = () => {
    let { AccountContext } = context;
    let { fieldCheck } = useContext(AccountContext)
    let navigate = useNavigate()
    let person = useSelector(state => state.person).value;
    let dispatch = useDispatch()
    let addPerson = () => {
        let copy = { ...person };
        delete copy.id;
        let valid = fieldCheck(copy)
        if (!valid) {
            alert("all fields must not b empty!")
            return;
        }
        dispatch(addList(person))
        alert("new person added")
        navigate(-1)
    }
    return (
        <>
            <h1>List Add</h1>
            <Form />
            <button onClick={() => addPerson()}>Add</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
export default ListAdd;