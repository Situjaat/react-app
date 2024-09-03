import { Route, Routes } from "react-router-dom"
import Dashboard from "../../../pages/dashboard/Dashboard";
import AboutUs from "../../../pages/about-us/AboutUs";
import ContactUs from "../../../pages/contact-us/ContactUs";
import Profile from "../../../pages/profile/Profile";
import Help from "../../../pages/help/Help"

function Main(){
    return(
        <main>
            <Routes>
           <Route path="/" element={<Dashboard/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/aboutus" element={<AboutUs/>}/>
           <Route path="/contactus" element={<ContactUs/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/help" element={<Help/>}/>

            </Routes>

</main>
    )
}

export default Main