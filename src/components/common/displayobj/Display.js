const DisplayObj = ({ dataObj = {}, title = "" }) => {
    return (
        <div className="child_div">
            <h2>
                {title}
            </h2>
            {Object.keys(dataObj).map(attr => {
                return (
                    <div key={attr}>
                        <span>{attr}</span>: &nbsp;
                        <span>{dataObj[attr]}</span>
                    </div>
                )
            })}
        </div>
    )

}

export default DisplayObj;