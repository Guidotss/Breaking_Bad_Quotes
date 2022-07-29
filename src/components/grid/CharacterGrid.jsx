import "./character.css"
import { CharacterItem } from "./CharItem/CharacterItem";

export const CharacterGrid = ({data,loading}) => {

    const character = data[0]; 

    if(character == undefined){
        return(
            <h2>Personaje no encontrado</h2>
        )
    }

    const {name,img} = character;

  return (
    <div className="character-grid">
        {
            loading
            ? <h2>Loading...</h2>
            : <CharacterItem data={data}/> 
        }
    </div>
  )
}