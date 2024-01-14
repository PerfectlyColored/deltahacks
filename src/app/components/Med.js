const Med = ({ color, moveMeds, name}) => {

   return (
        <li className="medName" onClick={()=> {
            console.log(name);
            moveMeds(`${name}`);
        }}>
            <a >
            {name}
        </a>
        </li>
    
    )
}
export default Med;