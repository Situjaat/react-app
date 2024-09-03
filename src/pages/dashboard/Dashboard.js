import LinkList from "../../components/common/LinkList/LinkList";
import "./dashboard.css"
import { Link } from "react-router-dom";



let sidebardata={

header:"Welcome To React Course",
content:[
    // {key:"dashboard",
    //     label:"Dashboard",
    // },
    {
        key:"profile",
        label:"Profile",
    },
    {
        key:"aboutus",
        label:"About Us",
    },
    {
        key:"contactus",
        label:"Contact Us",
    },
    {
        key:"help",
        label:"Help",
    }

]
}

const Dashboard = () => {
    return(
        <div className="Dashboard">
            <h1>{sidebardata.header}</h1>
            
            <LinkList linkArr={sidebardata.content} containerclass={'dashboard_btn'}  linkClass={'dashboard_link'}> </LinkList>
            </div>
    )
}

export default Dashboard