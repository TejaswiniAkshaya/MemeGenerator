import "../css/style.css"
import logo from '../images/logo192.png'
export const  Header=()=>{
    return(
        <>
        <nav className="navbar1">
         <img src={logo}></img>
          <h3>React Facts</h3>
          <h4>React Course-project1</h4>
        </nav>
        </>
    )
}