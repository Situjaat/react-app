import { useState } from "react"

const FormCreate = ({ formArr = [], onChangeCb, formObj }) => {
    console.log(formObj)

    return (
        <div className="contact_parent">
            {formArr.map(ele => {
                return (
                    ele.type === "input" ?
                        <div key={ele.id} className="contact_child">
                            <label > {ele.label} </label>
                            <input type={ele.type} name={ele.name} value={formObj?.[ele.name]} placeholder={ele.placeholder} subtype={ele.subtype} onChange={onChangeCb} ></input>
                        </div>
                        : ele.type === "select" ?
                            <div className="form-select">
                                <label> {ele.label}</label>
                                <select name={ele.name} placeholder={ele.placeholder} value={formObj?.[ele.name]} onChange={onChangeCb}>
                                    <option value={" "}></option>
                                    {ele.options.map(el => <option key={el.value} value={el.value} > {el.label}</option>)}
                                </select>
                            </div>

                            : ele.type === "radio" ?
                                <div className="form-radio">
                                    <label>{ele.label}</label>
                                    {ele.option.map(el =>
                                        <div className="male-female">
                                            <label>{el.label}</label>
                                            <input type={ele.type} value={el.value} name={ele.name} checked={formObj?.[ele.name] === el.value} onChange={onChangeCb} />
                                        </div>
                                    )}
                                </div>
                                : ele.type === "checkbox" ?
                                    <div className="checkbox">
                                        <label>{ele.label}</label>
                                        {ele.check.map(el =>

                                            <div className="check-value">
                                                <label>{el.label}</label>
                                                <input type={ele.type} value={el.value} name={ele.name} checked={formObj?.[ele.name]?.some(ee => ee === el.value)} onChange={onChangeCb} />
                                            </div>
                                        )}

                                    </div>
                                    : null
                )

            })}




        </div>
    )
}
export default FormCreate;