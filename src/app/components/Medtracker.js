'use client'
import { useState } from "react";
import Meds from "./Meds";
import Medstaken from "./Medstaken";
const Medtracker = () => {
    const [ medsArr, setMedsArr ] = useState([{name: "Vitamin D",desc:"1 Capsule, Once a day"},{name:"Amoxicillin",desc:"400mg every 12 hours"}]);
    const [ takenMedsArr, setTakenMedsArr ] = useState([{name:"Benzonate",desc:"2 capsules, Once a day"},{name:"Levothryoxine Sdoium", desc:"1 Capsule, Once a day"}]);
  
  function filterByValue(array, string) {
    console.log("the string is " + string);
    var newArray = array.filter (function (o) {
      return o.name != string;
    })
        return newArray;
  }

  function takeMeds(name,desc) {
    var newArray = filterByValue(medsArr, name);
    setMedsArr(newArray);
    setTakenMedsArr([ ...takenMedsArr, {name: `${name}`,desc: `${desc}`}]);
  }
  
  function untakeMeds(name,desc) {
    var newArray = filterByValue(takenMedsArr, name);
    setTakenMedsArr(newArray);
    setMedsArr([ ...medsArr, {name: `${name}`,desc: `${desc}`}]);
  }
  

return (
    <div className="medtracker panel">
        <h1 style={{marginBottom:"0.2em"}}>Medication Tracker</h1>
        <p style={{fontSize: "1.2em",marginBottom: "0.8em"}}>Click to move medication</p>
        <Meds takeMeds={takeMeds} medsArr={medsArr}></Meds>
        <hr className="separator"></hr>
        <h1>Completed</h1>
        <Medstaken untakeMeds={untakeMeds} medsArr={takenMedsArr}></Medstaken>
      
      </div>
)
}
export default Medtracker;