import { Link } from "react-router-dom";

const LinkList =  ({linkArr=[], containerclass,linkClass={}})=>{
    return(
            <div className={containerclass}>
                {linkArr.map(el =>{
                    return <Link key={el.key} className={linkClass} to={`/${el.key}`}>{el.label}</Link>
                })}
            </div> 

    )
}
    
export default LinkList