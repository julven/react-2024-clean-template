import { useState } from "react";
import { resetPerson } from './redux'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
let List = () => {
    let navigate = useNavigate();
    const [list] = useState(useSelector(state => state.list.value))
    let dispatch = useDispatch()
    let goTo = () => {
        dispatch(resetPerson())
        navigate("/list/add")
    }
    return (
        <>
            <h1>List</h1>
            <button onClick={() => goTo()}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ID </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.fname}</td>
                                    <td>{x.lname}</td>
                                    <td>{x.id}</td>
                                    <td>
                                        <Link to={"/list/view/" + x.id}>View</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default List;