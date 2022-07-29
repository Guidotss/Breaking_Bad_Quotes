import { Form } from "../form/Form"
import "./navbar.css"

export const NavBar = ({setName}) => {
  return(
    <header>
        <h1>Breaking Bad</h1>
        <nav>
            <Form setName = {setName}/>
        </nav>
    </header>
  )
}