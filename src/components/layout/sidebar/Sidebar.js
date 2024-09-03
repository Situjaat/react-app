import { Link } from "react-router-dom";
import "./sidebar.css"
import LinkList from "../../common/LinkList/LinkList";

let sidebardata={

    header:"Goverment Of Rajasthan",
    content:[
        {key:"dashboard",
            label:"Dashboard",
        },
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

function Sidebar (){
    
    return (
        <aside>
        <h2> {sidebardata.header}</h2>
      
        <LinkList linkArr={sidebardata.content} containerclass={'sidebar'} linkClass={'button'} />
      </aside>
    )
}
export default Sidebar