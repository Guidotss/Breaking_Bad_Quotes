export const CharacterItem = ({data}) => {
  console.log(data);
    const {name,img,occupation,nickname,status,birthday} = data[0];
  return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <img src={img} alt={name} className="card-img-top"/>
            <ul>
                <h5>Trabajos</h5>
                {
                    occupation.map(item => <li key={item}>{item}</li>)
                }
            </ul>
            <h5>Apodos: {nickname}</h5>
            <h5>Estado: {status}</h5>
            <h5>Fecha de nacimiento: {birthday}</h5>
        </div>
    </div>
  )
}