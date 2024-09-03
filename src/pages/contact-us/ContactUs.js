import { useState } from "react";
import FormCreate from "../../components/common/formcreate/FormCreate"
import "./contactUs.css"

const contactUsData = {
    heading: "Contact Us",
    form: [
        {
            id: "name",
            name: "name",
            label: "Name",
            type: "input",
            placeholder: "Enter your name",
            subtype: "text"
        },
        {
            id: "email",
            name: "email",
            label: "Email",
            type: "input",
            placeholder: "Enter your email",
            subtype: "email"
        },
        {
            id: "mobile",
            name: "mobile",
            label: "Mobile",
            type: "input",
            placeholder: "Enter your mobile",
            subtype: "number"
        },
        {
            id: "message",
            name: "message",
            label: "Message",
            type: "input",
            placeholder: "Enter your meassage",

        },
        {
            id: "city",
            name: "city",
            label: "City",
            type: "select",
            placeholder: "Enter City",
            options: [
                {
                    label: "Jaipur",
                    value: "Jaipur"
                },
                {
                    label: "Delhi",
                    value: "Delhi",
                },
                {
                    label: "Pune",
                    value: "Pune",
                },
                {
                    label: "Kanpur",
                    value: "Kanpur",
                }

            ]
        },
        {
            id: "gender",
            name: "gender",
            label: "Gender",
            type: "radio",

            option: [
                {
                    label: "Male",
                    value: "Male"
                },
                {
                    label: "Female",
                    value: "Female"
                }
            ]
        },
        {
            id: "checkbox",
            name: "hobbies",
            label: "Hobbies",
            type: "checkbox",

            check: [
                {
                    label: "Sports",
                    value: "Sports"
                },
                {
                    label: "Music",
                    value: "Music"
                },
                {
                    label: "Coding",
                    value: "Coding"
                },
                {
                    label: "Runing",
                    value: "Runing"
                }
            ]
        }


    ]
}

const ContactUs = () => {
    const [formObj, setFormObj] = useState(null);



    const form_change = (e) => {
        let { name, value } = e.target;
        let val = value
        if (e.target.name === "hobbies") {
            val = formObj?.hobbies ?? [];
            let isExists = val?.some(el => el === value)
            if (isExists) {
                val = val?.filter(el => el !== value);
            } else {
                val.push(value);
            }

        }
        setFormObj({
            ...formObj,
            [name]: val
        })
    }
    return (
        <div className="contact">
            <h1>{contactUsData.heading}</h1>

            <FormCreate formArr={contactUsData.form} onChangeCb={form_change} formObj={formObj} />
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent:"center" }}>
                <button className="button_contact"> Submit</button>
                <button className="button_contact" onClick={() => setFormObj(null)}>Reset</button>
            </div>
        </div>
    )
}

export default ContactUs