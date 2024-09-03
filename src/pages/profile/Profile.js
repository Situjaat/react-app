import { Link } from "react-router-dom"

import "./profile.css"
import DisplayObj from "../../components/common/displayobj/Display"

const profileObj = {

    headar: "Profile",

    personal:
    {
        name: "Sitaram",
        lastname: "Choudhary",
        religion: "Hindu",
        gender: "Male",
    },

    education:
    {

        collage: "BA",
        degree: "B. Tech",
        pg: "MA",
        year: "2024"

    },

    contact:
    {
        mobile: 89785462456,
        email: "choudhgartysutar",
        fax: "012456987",
        adresss: "Jaipur"
    },

    skills: ["Cricket", "Reading", "Music", "Runing"]


}

const Profile = () => {
    return (
        <div className="profile">
            <h1>{profileObj.headar}</h1>
            <div className="profile-container">
                <DisplayObj title="Personal" dataObj={profileObj.personal}/>
                <DisplayObj title="Education" dataObj={profileObj.education}/>
                <DisplayObj title="Contact" dataObj={profileObj.contact}/>
                {/* <DisplayObj title="Skills" dataObj={profileObj.skills}/> */}
  <div className="child_div">
    <h2>Skills</h2>
    <ul>
        {profileObj.skills.map(ele => {
            return (
                <li>{ele}</li>
            )

        })}
    </ul>
  </div>

            </div>
        </div>
    )
}
    
       

export default Profile