import Med from "./Med";

const Meds = ({ takeMeds, medsArr }) => {

    return (
        <ul className="meds">
        {
            medsArr.map((obj, i) => {
                return(
                <Med moveMeds={takeMeds} key={i} desc={`${obj.desc}`}name={`${obj.name}`}></Med>    
                );
            })
        }
        </ul>
    )
}
export default Meds;