import { useEffect } from "react";
import { useForm } from "../../hooks/useForm"
import "./form.css"

export const Form = ({setName}) => {
    const { formData, onInputChange } = useForm({
        name: "",
    });
    const { name } = formData;
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const {target} = e; 
        const character = target.name.value;
        setName(character);
    }

  return (
        
        <form onSubmit={handleSubmit}>
            <input className="form-control mt-5" name="name" placeholder="Enter your character" onChange={onInputChange} value={name}/>
            <button className="btn btn-primary">Buscar</button>
        </form>
        
  )
}