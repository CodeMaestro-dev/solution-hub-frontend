import { Outlet } from "react-router-dom";
import AppNavbar from "./AppNavbar";


export default function Layout() {
    return (
        <>
            <AppNavbar />
            <Outlet />
        </>
    )
}