const Takenmed = ({ color, desc, moveMeds, name}) => {

    return (
         <li className="medName takenMed" onClick={()=> {
            console.log(name);
            moveMeds(name,desc);
        }}>
             <p>
             {name}
         </p>
         </li>
     
     )
 }
 export default Takenmed;