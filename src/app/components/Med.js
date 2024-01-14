const Med = ({ color, desc, moveMeds, name}) => {

   return (
        <li className="medName" onClick={()=> {
            console.log(name);
            moveMeds(name,desc);
        }}>
            <h1 >
            {name}
        </h1>
        <p>{desc}</p>
        </li>
    
    )
}
export default Med;