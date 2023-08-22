import { Routes, Route } from "react-router-dom";
import MainHome from "../pages/MainHome/MainHome";
import ContactUs from "../pages/ContactUs/ContactUs";


export default function Router() {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<MainHome/>}/> 
                <Route exact path='/contactanos' element={<ContactUs/>}/>
            </Routes>
        </>
    )
}