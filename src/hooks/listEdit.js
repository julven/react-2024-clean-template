import { useContext, useEffect } from "react";
import Form from "./form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editList, updatePerson } from "./redux";
import { context } from "./context";
let ListEdit = () => {
    let { AccountContext } = context;
    let { fieldCheck } = useContext(AccountContext)
    let param = useParams()
    let person = useSelector(state => state.person);
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let thePerson = useSelector(state => state.list.value).find(x => x.id === param.id)
    useEffect(() => {
        if (thePerson) dispatch(updatePerson(thePerson))
        else navigate("/list")
    }, [])
    let handleSubmit = () => {
        let copy = { ...person };
        let valid = fieldCheck(copy.value);
        if (!valid) {
            alert("all fields must not b empty!")
            return;
        } else {
            dispatch(editList(person))
            alert(" person updated")
            navigate(-1)
        }
    }
    return (
        <>
            <h1>List Edit</h1>
            <Form />
            <button onClick={() => handleSubmit()}>update</button>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}
export default ListEdit;