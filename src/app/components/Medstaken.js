import Med from "./Med";

const Medstaken = ({ untakeMeds, medsArr }) => {

    return (
        <ul className="meds medstaken">
        {
            medsArr.map((obj, i) => {
                return(
                <Med moveMeds={untakeMeds} key={i} name={`${obj.name}`}></Med>    
                );
            })
        }
        </ul>
    )
}
export default Medstaken;