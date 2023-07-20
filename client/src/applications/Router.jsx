import { Routes, Route } from "react-router-dom";
import MainHome from "../pages/MainHome/MainHome";

export default function Router() {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<MainHome/>}/>   
            </Routes>
        </>
    )
}