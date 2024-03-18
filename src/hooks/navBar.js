
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from "./home";
import List from "./list";
import ListAdd from "./listAdd";
import ListView from "./listView";
import ListEdit from "./listEdit";
import Account from "./account";
import AccountEdit from "./accountEdit";
import { context } from './context';
import { useContext, useEffect } from 'react';
import AccountLogin from './accountLogin';
let NavBar = () => {
    let {AccountContext} = context;
    let {logged} = useContext(AccountContext);
    let NavGuard = () => {
        return (logged? <Outlet /> :<Navigate to="/account/login"/>)
    }
    let AccountLogged = ({children}) => {
        return (logged? <Navigate to="/account" replace/> : <>{children}</>)
    }
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list">List</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/list">
                    <Route index element={<List />} />
                    <Route path="add" element={<ListAdd />} />
                    <Route path="edit/:id" element={<ListEdit />} />
                    <Route path="view/:id" element={<ListView />} />
                </Route>
                <Route exact path="/account">
                    <Route path='login' element={<AccountLogged><AccountLogin /></AccountLogged>} />
                    <Route element={<NavGuard />}>
                        <Route index element={<Account />} />
                        <Route path="edit" element={<AccountEdit />} />
                    </Route>
                </Route>
                <Route path="*" element={<div>Page not found</div>} />
            </Routes>
            <Outlet />
        </>
    )
}
export default NavBar;