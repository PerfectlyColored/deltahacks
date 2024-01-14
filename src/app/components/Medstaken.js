import Takenmed from "./Takenmed";

const Medstaken = ({ untakeMeds, medsArr }) => {

    return (
        <ul className="meds medstaken">
        {
            medsArr.map((obj, i) => {
                return(
                <Takenmed moveMeds={untakeMeds} desc={`${obj.desc}`} key={i} name={`${obj.name}`}></Takenmed>    
                );
            })
        }
        </ul>
    )
}
export default Medstaken;